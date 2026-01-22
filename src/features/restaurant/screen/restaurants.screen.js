import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import Search from './Search';
import { Spacer } from '../../../components/spacer/spacer.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeArea>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <FlatList
          data={[
            { name: 'abc' },
            { name: 'asdfsaf' },
            { name: 'abfasc' },
            { name: 'asfasdfasdf' },
            { name: 'abasfasffc' },
            { name: 'asasdfasdffdf' },
            { name: 'aasdfabc' },
            { name: 'asasasdf' },
            { name: 'abzxc' },
            { name: 'asdasfaf' },
            { name: 'ab4rtc' },
            { name: 'asdsdfgf' },
            { name: 'abw45vc' },
            { name: 'asvwertbdf' },
            { name: 'abwertwdfc' },
            { name: 'asbwertwervdf' },
            { name: 'abvwertc' },
            { name: 'asvwertdf' },
          ]}
          renderItem={() => (
            <>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard />
              </Spacer>
            </>
          )}
          keyExtractor={item => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeArea>
    </SafeAreaProvider>
  );
};

export { RestaurantsScreen };
