import React, { useCallback } from 'react';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../../restaurant/components/restaurant-info-card.component';
import { useFavourites } from '../../../services/favourites/favourites.context';
import { Spacer } from '../../../components/spacer/spacer.component';
import { TouchableOpacity } from 'react-native';
import { RestaurantList } from '../../restaurant/components/restaurant-info-card-styles';
import { BackButton } from '../../../components/utility/back-button.component';
import {
  NoFavouritesText,
  NoFavouritesWrapper,
} from '../components/favourites-styles';

export const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useFavourites();

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <Spacer position="bottom" size="large">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Restaurants', {
                screen: 'RestaurantDetail',
                params: { restaurant: item },
              })
            }
            activeOpacity={0.7}
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        </Spacer>
      );
    },
    [navigation]
  );

  const keyExtractor = useCallback(item => item.placeId || item.name, []);
  return (
    <SafeArea>
      <BackButton navigation={navigation} />
      {favourites.length ? (
        <RestaurantList
          data={favourites}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          windowSize={10}
          removeClippedSubviews={true}
          updateCellsBatchingPeriod={50}
        />
      ) : (
        <NoFavouritesWrapper>
          <NoFavouritesText variant="body">
            No favourites yet. Feel free to add some!
          </NoFavouritesText>
        </NoFavouritesWrapper>
      )}
    </SafeArea>
  );
};
