import React, { useCallback } from 'react';
import { FlatList, Pressable } from 'react-native';
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

// navigation prop is injected automatically by react navigation stack
export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoadingRestaurants } = useRestaurants();

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <Pressable onPress={() => navigation.navigate('RestaurantDetail')}>
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        </Pressable>
      );
    },
    [navigation]
  );

  const keyExtractor = useCallback(item => item.placeId || item.name, []);

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
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={10}
        removeClippedSubviews={true}
        updateCellsBatchingPeriod={50}
      />
    </SafeArea>
  );
};
