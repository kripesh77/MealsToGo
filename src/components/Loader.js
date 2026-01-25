import * as React from 'react';
import { ActivityIndicator } from 'react-native-paper';

export const Loader = ({ color, size }) => (
  <ActivityIndicator animating={true} color={color} size={size} />
);
