import {
  DarkTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';

import { themas } from '../global/themes';
import StackRoutes from './stack.routes';

const navigationTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: themas.Colors.primary,
    background: themas.Colors.bgScreen,
    card: themas.Colors.surface,
    text: themas.Colors.text,
    border: themas.Colors.border,
  },
};

export default function Routes() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StackRoutes />
    </NavigationContainer>
  );
}
