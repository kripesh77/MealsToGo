import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';

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
    <Card style={styles.card}>
      <Card.Title title={name} subtitle={address} />
      <Card.Cover style={styles.photos} source={{ uri: photos[0] }} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {},
  photos: {
    padding: 8,
  },
});

export default RestaurantInfoCard;
