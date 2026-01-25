import React from 'react';
import { Loader } from './Loader';
import styled from 'styled-components/native';

const FullScreen = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FullScreenLoader = () => {
  return (
    <FullScreen>
      <Loader color="#eeff30" size="large" />
    </FullScreen>
  );
};
