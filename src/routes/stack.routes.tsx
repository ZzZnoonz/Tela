import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomRoutes from './bottom.routes';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Principal" component={BottomRoutes} />
    </Stack.Navigator>
  );
}
