import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurant/screen/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { Ionicons } from '@expo/vector-icons';

import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useFontsLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { SafeArea } from './src/components/utility/safe-area.component';
import { RestaurantsProvider } from './src/services/restaurants/restaurants.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'restaurant',
  Maps: 'map',
  Settings: 'settings',
};

const screenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ color, size }) => {
      return <Ionicons name={TAB_ICON[route.name]} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  };
};

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
        <RestaurantsProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Maps" component={Maps} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsProvider>
      </ThemeProvider>
      <StatusBar style="auto" hidden={true} />
    </>
  );
}

const Maps = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        <Text>Maps</Text>
      </View>
    </SafeArea>
  );
};

const Settings = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        <Text>Settings</Text>
      </View>
    </SafeArea>
  );
};
