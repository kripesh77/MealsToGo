import React, { useMemo } from 'react';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Star from '../../../../assets/Star';
import Open from '../../../../assets/Open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Favourite } from '../../../components/favourites/favourite.component';

import { Text } from '../../../components/typography/text.component';
import {
  Icon,
  Info,
  Rating,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from './restaurant-info-card-styles';

export const RestaurantInfoCard = React.memo(({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    address = '100 some random street',
    photos = [
      'https://blog.swiggy.com/wp-content/uploads/2025/01/Image-9_-meat-burger.png',
    ],
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from({ length: Math.floor(rating) });

  return (
    <Spacer position="bottom" size="large">
      <Card>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml xml={Star} width={20} height={20} key={i} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="medium">
                {isOpenNow && <SvgXml xml={Open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="medium">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Text variant="hint">{address}</Text>
        </Info>
      </Card>
    </Spacer>
  );
});
