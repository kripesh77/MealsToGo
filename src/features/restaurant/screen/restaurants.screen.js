import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import Search from './Search';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { useRestaurants } from '../../../services/restaurants/restaurants.context';
import { FullScreenLoader } from '../../../components/FullScreenLoader';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useRestaurants();

  const renderRestaurant = useCallback(({ item }) => {
    return <RestaurantInfoCard restaurant={item} />;
  }, []);

  const keyExtractor = useCallback(item => item.name, []);

  return (
    <SafeArea>
      <SearchContainer>
        <Search />
      </SearchContainer>
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={renderRestaurant}
          keyExtractor={keyExtractor}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={10}
          removeClippedSubviews={true}
          updateCellsBatchingPeriod={50}
        />
      )}
    </SafeArea>
  );
};
