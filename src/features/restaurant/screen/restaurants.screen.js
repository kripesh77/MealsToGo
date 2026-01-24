import React from 'react';
import { FlatList, View } from 'react-native';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import Search from './Search';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { useRestaurants } from '../../../services/restaurants/restaurants.context';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantsScreen = () => {
  const { restaurants } = useRestaurants();
  return (
    <SafeArea>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
