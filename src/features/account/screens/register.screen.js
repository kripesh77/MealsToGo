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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { onRegister, error, setError, isLoadingAuth } = useAuthentication();

  function handleRegister() {
    if (!email || !password || !confirmPassword) return;
    if (password !== confirmPassword) {
      setError('Password do not match');
      return;
    }
    onRegister(email.toLowerCase().trim(), password.toLowerCase().trim());
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
            onChangeText={p => setPassword(p)}
          />
          <TextInput
            label="Confirm Password"
            mode="outlined"
            textContentType="confirmPassword"
            secureTextEntry
            autoCapitalize="none"
            value={confirmPassword}
            onChangeText={p => setConfirmPassword(p)}
          />
          {error && (
            <Spacer size="large">
              <Text variant="error">{error}</Text>
            </Spacer>
          )}
          <Spacer size="medium">
            <AuthButton icon="lock-open-outline" onPress={handleRegister}>
              {isLoadingAuth ? <ActivityIndicator color="blue" /> : 'Register'}
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </AccountBackground>
    </SafeArea>
  );
};
