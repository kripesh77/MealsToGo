import React from 'react';
import styled from 'styled-components/native';
import { Text } from '../typography/text.component';
import { mockImages } from '../../services/restaurants/mock';

const CompactImage = styled.Image`
  border-radius: 10px 10px 0px 0px;
  width: 120px;
  height: 100px;
  max-width: 120px;
  max-height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactText = styled(Text).attrs({
  numberOfLines: 1,
  variant: 'hint',
})`
  padding-inline: 10px;
  padding-block: 0px 5px;
  background-color: white;
  width: 120px;
  border-radius: 0px 0px 10px 10px;
  text-align: center;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
  const imageIndex = restaurant.name.length % mockImages.length;
  const photo = mockImages[imageIndex];
  return (
    <Item>
      <CompactImage source={{ uri: photo }} />
      <CompactText>{restaurant.name}</CompactText>
    </Item>
  );
};
