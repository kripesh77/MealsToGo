import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { initializeApp, getApps } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { process } from './env';

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
import { FavouritesProvider } from './src/services/favourites/favourites.context';
import { AuthenticationProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = process.env.firebaseConfig;

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
  initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

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
      <AuthenticationProvider>
        <ThemeProvider theme={theme}>
          <FavouritesProvider>
            <LocationProvider>
              <RestaurantsProvider>
                <Navigation />
              </RestaurantsProvider>
            </LocationProvider>
          </FavouritesProvider>
        </ThemeProvider>
      </AuthenticationProvider>
      <StatusBar style="auto" />
    </>
  );
}
