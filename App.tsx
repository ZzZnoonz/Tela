import { StatusBar } from 'expo-status-bar';

import { themas } from './src/global/themes';
import Produto from './src/pages/produto';

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor={themas.Colors.bgScreen} />
      <Produto />
    </>
  );
}
