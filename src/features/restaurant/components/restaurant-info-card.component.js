import React, { memo } from 'react';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Star from '../../../../assets/Star';
import Open from '../../../../assets/Open';
import { Spacer } from '../../../components/spacer/spacer.component';

import { Text } from '../../../components/typography/text.component';
import {
  Icon,
  Info,
  Rating,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from './restaurant-info-card-styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
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

  // Array.from({length: 5}, (_, i) => i + 1); gives:
  // [1, 2, 3, 4, 5];
  const starArray = Array.from({ length: rating });
  // console.log(starArray);
  // [undefined, undefined, undefined, undefined]

  return (
    <Spacer position="bottom" size="large">
      <Card>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {starArray.map((_, i) => (
                <SvgXml xml={Star} width={20} height={20} key={i} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="medium">
                {isOpenNow ? (
                  <SvgXml xml={Open} width={20} height={20} />
                ) : null}
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
};

export default memo(RestaurantInfoCard);
