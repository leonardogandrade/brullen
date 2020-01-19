import React,{ Component }  from 'react';
import {View } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Search from '../../components/Search';
import Directions from '../Directions';
import { getPixelSize } from '../../utils';


export default class App extends Component {
    state = {
        region : null,
        destination : null,
    }

    // componentDidMount(){
    //     Geolocation.getCurrentPosition( info => console.log(info));
    // }

    handleLocationSelected = (data, {geometry}) =>{
        const {location : {lat: latitude, lng : longitude}} = geometry;

        this.setState({
            destination : {
                latitude,
                longitude,
                title : data.structured_formatting.main_text,
            }
        })

    }

    componentDidMount(){
        Geolocation.getCurrentPosition(data => {
            const {latitude,longitude} = data.coords;
            this.setState({
                region : {
                    latitude,
                    longitude,
                    latitudeDelta : 0.0143,
                    longitudeDelta : 0.0134
                }
            })
        })
    }

    render(){
    const { region, destination } = this.state;

        return(
            <View style={{ flex : 1}}>
                <MapView
                    style={{ flex : 1}}
                    region={
                        region
                    }
                    showsUserLocation
                    loadingEnabled
                    ref={el => this.MapView = el}
                >
                { destination && (
                    <Directions
                        origin={region}
                        destination={destination}
                        onReady={ result => {
                            this.MapView.fitToCoordinates(result.coordinates,{
                                edgePadding : {
                                    right : getPixelSize(50),
                                    left : getPixelSize(50),
                                    top : getPixelSize(50),
                                    bottom : getPixelSize(50),
                                }
                            })
                        }}
                    />
                ) }
                </MapView>
                <Search onLocationSelected={ this.handleLocationSelected }/>
            </View>
        )
    }
}