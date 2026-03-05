import React, { useState } from 'react';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from '../components/account.styles';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { Spacer } from '../../../components/spacer/spacer.component';
import { useAuthentication } from '../../../services/authentication/authentication.context';
import { BackButton } from '../../../components/utility/back-button.component';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error, isLoadingAuth } = useAuthentication();

  function handleLogin() {
    if (!email || !password) return;
    onLogin(email.toLowerCase().trim(), password.toLowerCase().trim());
  }
  return (
    <SafeArea>
      <BackButton navigation={navigation} />
      <AccountBackground>
        <AccountCover />
        <Title>Meals To Go</Title>
        <AccountContainer>
          <TextInput
            label="Email"
            mode="outlined"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={e => setEmail(e)}
          />
          <TextInput
            label="Password"
            mode="outlined"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            secure
            onChangeText={p => setPassword(p)}
          />
          {error && (
            <Spacer size="large">
              <Text variant="error">{error}</Text>
            </Spacer>
          )}
          <Spacer size="medium">
            <AuthButton
              icon="lock-open-outline"
              onPress={handleLogin}
              disabled={isLoadingAuth}
            >
              {isLoadingAuth ? <ActivityIndicator color="blue" /> : 'Login'}
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </AccountBackground>
    </SafeArea>
  );
};
