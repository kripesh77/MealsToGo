import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [value, setValue] = useState('36. Adding the address');
  return (
    <Searchbar
      value={value}
      onChangeText={setValue}
      placeholder="Search"
      // showDivider={true}
      // loading={true}
      // onChangeText={setSearchQuery}
      // value={searchQuery}
    />
  );
};

export default Search;
