import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [value, setValue] = useState('054 Exercise Tab Navigation');
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
