import React from 'react';
import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';
import { Search } from '../search.component';
import { useLocation } from '../../../services/location/location.context';
import { useRestaurants } from '../../../services/restaurants/restaurants.context';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useLocation();
  const { restaurants } = useRestaurants();

  const latDelta =
    location.viewport.northeast.lat - location.viewport.southwest.lat;

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant, i) => (
          <Marker
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
            title="Dummy Marker"
            description="This is a dummy marker"
            key={i}
          />
        ))}
      </Map>
    </>
  );
};
