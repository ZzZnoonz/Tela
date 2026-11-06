import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import BottomRoutes from './bottom.routes';
import { StackParamList } from './types';

const Stack = createStackNavigator<StackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
    </Stack.Navigator>
  );
}
