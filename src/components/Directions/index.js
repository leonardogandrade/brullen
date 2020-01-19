import React from 'react';
import  MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey='AIzaSyDiUHFLdnb4eXjLzs6Tn3gRsK9iHX_awqY'
        strokeWidth={3}
        strokeColor='#222'
    />
)

export default Directions;