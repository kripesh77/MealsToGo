import React from 'react';
import { Image, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import Star from '../../../../assets/Star';
import Open from '../../../../assets/Open';

const Title = styled(Text)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Rating = styled.View`
  flex: 0;
  flex-direction: row;
  padding-block: ${props => props.theme.space[2]};
`;

const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${props => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

const ClosedText = styled.Text`
  color: ${props => props.theme.colors.ui.error};
  font-size: ${props => props.theme.fontSizes.caption};
`;

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
    <Card>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {starArray.map((_, i) => (
              <SvgXml xml={Star} width={20} height={20} key={i} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <ClosedText>CLOSED TEMPORARILY</ClosedText>}
            {isOpenNow ? <SvgXml xml={Open} width={20} height={20} /> : null}
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};

export default RestaurantInfoCard;
