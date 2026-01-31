import React from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useFavourites } from '../../services/favourites/favourites.context';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  const isFavourite = favourites.find(
    fav => fav.placeId === restaurant.placeId
  );

  return (
    <FavouriteButton
      onPress={() =>
        isFavourite
          ? removeFromFavourites(restaurant)
          : addToFavourites(restaurant)
      }
    >
      <Entypo
        name={`${isFavourite ? 'heart' : 'heart-outlined'}`}
        size={24}
        color="red"
      />
    </FavouriteButton>
  );
};
