import { Text } from '../../../components/typography/text.component';
import styled from 'styled-components/native';

export const NoFavouritesText = styled(Text)`
  font-size: ${props => props.theme.sizes[1]};
`;

export const NoFavouritesWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
