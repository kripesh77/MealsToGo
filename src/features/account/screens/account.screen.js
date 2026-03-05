import React from 'react';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Pressable, View } from 'react-native';
import { Text } from '../../../components/typography/text.component';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';

export const AccountScreen = ({ navigation }) => (
  <SafeArea>
    <AccountBackground>
      <AccountCover />

      <AccountContainer>
        <Text variant="label">Account</Text>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size="medium">
          <AuthButton
            icon="lock-open-outline"
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  </SafeArea>
);
