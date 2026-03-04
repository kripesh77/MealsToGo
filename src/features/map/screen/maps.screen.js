import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { Search } from '../search.component';
import { useLocation } from '../../../services/location/location.context';
import { useRestaurants } from '../../../services/restaurants/restaurants.context';
import { Pressable } from 'react-native';
import { MapCallout } from '../components/map-callout.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useLocation();
  const { restaurants } = useRestaurants();

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    setSelectedRestaurant(null);
  }, [location]);

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
        onPress={() => setSelectedRestaurant(null)}
        onDoublePress={() => setSelectedRestaurant(null)}
        onPanDrag={() => {
          if (selectedRestaurant) {
            setSelectedRestaurant(null);
          }
        }}
      >
        {restaurants.map((restaurant, i) => (
          <Marker
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
            key={restaurant.name}
            onPress={() => setSelectedRestaurant(restaurant)}
          />
        ))}
      </Map>
      {selectedRestaurant && (
        <MapCallout restaurant={selectedRestaurant} navigation={navigation} />
      )}
    </>
  );
};
