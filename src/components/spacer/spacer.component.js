import React from 'react';
import styled from 'styled-components/native';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'margin-top',
  right: 'margin-right',
  bottom: 'margin-bottom',
  left: 'margin-left',
};

const getVariant = (position, size, theme) => {
  return `${positionVariant[position]}: ${theme.space[sizeVariant[size]]}`;
};

export const Spacer = styled.View`
  ${({ position = 'top', size = 'small', theme }) =>
    getVariant(position, size, theme)};
`;
