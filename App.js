import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurant/screen/restaurants.screen';

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" hidden={true} />
    </>
  );
}
