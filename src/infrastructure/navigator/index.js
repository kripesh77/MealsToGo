import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app.navigator';
import { useAuthentication } from '../../services/authentication/authentication.context';
import { AuthenticationNavigator } from './authentication.navigator';

export const Navigation = () => {
  const { isAuthenticated } = useAuthentication();
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  );
};
