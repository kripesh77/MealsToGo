import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { SettingScreen } from '../../features/settings/screen/settings.screen';
import { FavouriteScreen } from '../../features/settings/screen/favourites.screen';

const Stack = createStackNavigator();

export const SettingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Favourites" component={FavouriteScreen} />
    </Stack.Navigator>
  );
};
