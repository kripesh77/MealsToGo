import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { useLocation } from '../../../services/location/location.context';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const Search = () => {
  const { keyword, search } = useLocation();
  const [value, setValue] = useState(keyword);

  useEffect(() => {
    search(value);
  }, [search, value]);

  const handleChangeText = text => {
    setValue(text);
  };

  const handleSubmitEditing = () => {
    search(value);
  };

  return (
    <SearchContainer>
      <Searchbar
        value={value}
        onChangeText={handleChangeText}
        placeholder="Search for a location"
        onSubmitEditing={handleSubmitEditing}
      />
    </SearchContainer>
  );
};

export default Search;
