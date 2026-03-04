import React from 'react';

import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info.component';
import styled from 'styled-components/native';

const CalloutWrapper = styled.TouchableOpacity`
  position: absolute;
  z-index: 999;
  bottom: 54.5%;
  align-self: center;
  width: 40%;
`;

export const MapCallout = ({ restaurant, navigation }) => {
  return (
    <CalloutWrapper
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate('Restaurants', {
          screen: 'RestaurantDetail',
          params: { restaurant },
        })
      }
    >
      <CompactRestaurantInfo restaurant={restaurant} />
    </CalloutWrapper>
  );
};
