import React,{Component} from 'react';
import { View,Text } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

export default class Search extends Component{
    
    componentDidMount(){
        RNGooglePlaces.openAutocompleteModal()
        .then((place) => {
            console.log(place);
        })
        .catch(error => console.log(error.message));   
    }
    
    render(){
        return(
            <View>
                
            </View>
        )
    }
}