import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Spacer } from '../spacer/spacer.component';
import { Text } from '../typography/text.component';

const FavouriteWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onDetail }) => {
  return (
    <FavouriteWrapper>
      <Text variant="hint">Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map(restaurant => {
          return (
            <Spacer position="left" size="medium">
              <TouchableOpacity onPress={() => onDetail(restaurant)}>
                <CompactRestaurantInfo
                  key={restaurant.placeId}
                  restaurant={restaurant}
                />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouriteWrapper>
  );
};
