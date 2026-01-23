import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const Safe = styled(SafeAreaView)`
  flex: 1;
`;

export const SafeArea = ({ children }) => {
  return (
    <SafeAreaProvider>
      <Safe>{children}</Safe>
    </SafeAreaProvider>
  );
};
