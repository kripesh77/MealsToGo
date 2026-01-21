import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled(Card.Title)`
  color: blue;
`;

const Cover = styled(Card.Cover)`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    address = '100 some random street',
    photos = [
      'https://blog.swiggy.com/wp-content/uploads/2025/01/Image-9_-meat-burger.png',
    ],
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card>
      <Title title={name} />
      <Cover source={{ uri: photos[0] }} />
    </Card>
  );
};

export default RestaurantInfoCard;
