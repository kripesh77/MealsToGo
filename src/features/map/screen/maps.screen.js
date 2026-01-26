import React from 'react';
import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const dummyCoordinates = {
  latitude: 27.581917,
  longitude: 85.557972,
};

export const MapScreen = () => {
  return (
    <Map
      initialRegion={{
        latitude: dummyCoordinates.latitude,
        longitude: dummyCoordinates.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={dummyCoordinates}
        title="Dummy Marker"
        description="This is a dummy marker"
      />
    </Map>
  );
};
