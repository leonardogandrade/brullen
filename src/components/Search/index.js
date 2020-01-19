import React,{Component} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Platform } from 'react-native';

export default class Search extends Component{
    state ={
        searchFocused : false,
    }
    render(){
        const { searchFocused } = this.state;
        const { onLocationSelected } = this.props;
        return(
            <GooglePlacesAutocomplete
                placeholder='para onde?'
                placeholderTextColor='#888'
                onPress={onLocationSelected  }
                query={{
                    key:'AIzaSyDiUHFLdnb4eXjLzs6Tn3gRsK9iHX_awqY',
                    language:'pt'
                }}
                textInputProps={{
                    onFocus: () =>{this.setState({searchFocused:true})},
                    onBlur: () =>{this.setState({searchFocused:false})},
                    autoCapitalize:'none',
                    autoCorrect:false
                }}
                listViewDisplayed={searchFocused}
                fetchDetails
                enablePoweredByContainer={false}
                styles={{
                    container : {
                        position : 'absolute',
                        top : Platform.select({ ios : 60, android : 40}),
                        width : '100%'
                    },
                    textInputContainer : {
                        flex : 1,
                        backgroundColor : 'transparent',
                        height : 54,
                        borderHorizontal : 20,
                        borderTopWidth : 0,
                        borderBottomWidth : 0,
                    } ,
                    textInput : {
                        height : 54,
                        margin : 0,
                        borderRadius : 0,
                        paddingTop :0,
                        paddingBottom : 0,
                        paddingLeft : 0,
                        paddingRight : 0,
                        marginTop : 0,
                        marginLeft : 5,
                        marginRight : 5,
                        elevation :5,
                        shadowOpacity : 0.1,
                        shadowOffset : {x : 0, y:0 },
                        shadowRadius : 15,
                        borderWidth : 1,
                        borderColor : '#ddd',
                        fontSize : 18
                    },
                    listView : {
                        borderWidth : 1,
                        borderColor : '#DDD',
                        backgroundColor : '#FFF',
                        marginHorizontal : 20,
                        elevation :5,
                        shadowOpacity : 0.1,
                        shadowOffset : {x : 0, y:0 },
                        shadowRadius : 15,
                        borderWidth : 1,
                        borderRadius : 15,
                        marginTop : 10,
                    },
                    description : {
                        fontSize : 16,
                    },
                    row : {
                        padding : 20,
                        height : 58,
                    }
                }}
            />
        )
    }
}