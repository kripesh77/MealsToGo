import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';
import { Search } from '../search.component';
import { useLocation } from '../../../services/location/location.context';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const dummyCoordinates = {
  latitude: 37.78825,
  longitude: -122.4324,
};

export const MapScreen = () => {
  const { location } = useLocation();
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 1,
          longitudeDelta: 1,
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
