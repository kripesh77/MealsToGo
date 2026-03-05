import React from 'react';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { AccountBackground } from '../components/account.styles';

export const LoginScreen = () => (
  <SafeArea>
    <AccountBackground>
      <Text variant="label">Login</Text>
    </AccountBackground>
  </SafeArea>
);
