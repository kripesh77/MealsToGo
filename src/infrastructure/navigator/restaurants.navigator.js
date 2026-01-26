import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurant/screen/restaurants.screen';
import { RestaurantsDetailScreen } from '../../features/restaurant/screen/restaurants.detail';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="Home"
        component={RestaurantsScreen} // Now, on this component, react navigation guarantees that the component will receive a navigation prop on the top level
        options={{ headerShown: false }}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantsDetailScreen}
        options={{ headerShown: false }}
      />
    </RestaurantStack.Navigator>
  );
};
