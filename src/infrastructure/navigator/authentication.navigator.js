import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeArea } from '../../components/utility/safe-area.component';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const Login = () => (
  <SafeArea>
    <View>
      <Text>Login</Text>
    </View>
  </SafeArea>
);

const Signup = () => (
  <SafeArea>
    <View>
      <Text>Signup</Text>
    </View>
  </SafeArea>
);

const Account = ({ navigation }) => (
  <SafeArea>
    <View>
      <Text>Account</Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text>Signup</Text>
      </Pressable>
    </View>
  </SafeArea>
);
