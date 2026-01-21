import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import Search from './Search';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const List = styled(View)`
  flex: 1;
  padding: 16px;
`;

const RestaurantsScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeArea>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <List>
          <RestaurantInfoCard />
        </List>
      </SafeArea>
    </SafeAreaProvider>
  );
};

export { RestaurantsScreen };
