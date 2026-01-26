import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex: 0;
  flex-direction: row;
  padding-block: ${props => props.theme.space[2]};
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
