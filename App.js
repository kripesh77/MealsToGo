import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurant/screen/restaurants.screen';
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
        <RestaurantsScreen />
      </ThemeProvider>
      <StatusBar style="auto" hidden={true} />
    </>
  );
}
