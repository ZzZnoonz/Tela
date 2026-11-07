import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { themas } from '../global/themes';
import ControleEstoque from '../pages/estoque';
import Produto from '../pages/produto';
import SaidaProduto from '../pages/saida';
import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themas.Colors.text,
        tabBarInactiveTintColor: themas.Colors.gray,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 10,
          borderTopColor: themas.Colors.border,
          backgroundColor: themas.Colors.surface,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
        },
      }}
    >
      <Tab.Screen
        name="NovoProduto"
        component={Produto}
        options={{
          title: 'Novo produto',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="package-variant-closed-plus"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SaidaProduto"
        component={SaidaProduto}
        options={{
          title: 'Saída',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="package-up"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ControleEstoque"
        component={ControleEstoque}
        options={{
          title: 'Estoque',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="warehouse"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
