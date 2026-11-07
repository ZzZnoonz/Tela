import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { themas } from './src/global/themes';
import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor={themas.Colors.bgScreen} />
      <Routes />
    </SafeAreaProvider>
  );
}
