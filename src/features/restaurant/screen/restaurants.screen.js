import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import Search from '../components/search.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { useRestaurants } from '../../../services/restaurants/restaurants.context';
import { Spacer } from '../../../components/spacer/spacer.component';
import { ActivityIndicator } from 'react-native-paper';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoadingRestaurants } = useRestaurants();

  return (
    <SafeArea>
      {isLoadingRestaurants && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="blue" />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
