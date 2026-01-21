import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurant/screen/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <StatusBar style="auto" hidden={true} />
    </>
  );
}
