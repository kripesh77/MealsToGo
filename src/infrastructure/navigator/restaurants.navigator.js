import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurant/screen/restaurants.screen';
import { Text } from '../../components/typography/text.component';

const RestaurantStack = createStackNavigator();

const Detail = () => {
  return <Text>Detail</Text>;
};

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Home"
        component={RestaurantsScreen} // Now, on this component, react navigation guarantees that the component will receive a navigation prop on the top level
        options={{ headerShown: false }}
      />
      <RestaurantStack.Screen name="RestaurantDetail" component={Detail} />
    </RestaurantStack.Navigator>
  );
};
