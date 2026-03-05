import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';
import Back from '../../../assets/Back';

const BackBackground = styled(TouchableOpacity).attrs({
  activeOpacity: 0.75,
})`
  width: 44px;
  height: 44px;
  border-radius: 22px;

  align-items: center;
  justify-content: center;

  position: absolute;
  left: 20px;

  background-color: black;

  z-index: 1000;
`;

export function BackButton({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <BackBackground
      onPress={() => navigation.goBack()}
      style={{ top: insets.top + 20 }}
    >
      <SvgXml xml={Back} width={20} height={20} />
    </BackBackground>
  );
}
