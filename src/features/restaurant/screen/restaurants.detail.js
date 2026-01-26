import React from 'react';
import { Text } from '../../../components/typography/text.component';
import { Card } from 'react-native-paper';
import { RestaurantCardCover } from '../components/restaurant-info-card-styles';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
