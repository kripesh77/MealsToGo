import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RestaurantInfoCard from '../components/restaurant-info-card.component';

const RestaurantsScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            value="value"
            // showDivider={true}
            // loading={true}
            // onChangeText={setSearchQuery}
            // value={searchQuery}
          />
        </View>
        <View style={styles.list}>
          <RestaurantInfoCard />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});

export { RestaurantsScreen };
