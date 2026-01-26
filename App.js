import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useFontsLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
import { RestaurantsProvider } from './src/services/restaurants/restaurants.context';
import { LocationProvider } from './src/services/location/location.context';
import { Navigation } from './src/infrastructure/navigator';

export default function App() {
  const [oswaldFontLoaded] = useFontsOswald({
    Oswald_400Regular,
  });

  const [latoFontLoaded] = useFontsLato({
    Lato_400Regular,
  });

  if (!oswaldFontLoaded || !latoFontLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationProvider>
          <RestaurantsProvider>
            <Navigation />
          </RestaurantsProvider>
        </LocationProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
