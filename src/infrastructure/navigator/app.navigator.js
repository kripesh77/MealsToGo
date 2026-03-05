import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screen/maps.screen';
import { FavouritesProvider } from '../../services/favourites/favourites.context';
import { LocationProvider } from '../../services/location/location.context';
import { RestaurantsProvider } from '../../services/restaurants/restaurants.context';
import { SettingNavigator } from './settings.navigator';

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
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesProvider>
      <LocationProvider>
        <RestaurantsProvider>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsNavigator}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Maps"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingNavigator}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </RestaurantsProvider>
      </LocationProvider>
    </FavouritesProvider>
  );
};
