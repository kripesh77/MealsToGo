import React from 'react';
import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';
import { Search } from '../search.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const dummyCoordinates = {
  latitude: 37.78825,
  longitude: -122.4324,
};

export const MapScreen = () => {
  return (
    <>
      <Search />
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
    </>
  );
};
