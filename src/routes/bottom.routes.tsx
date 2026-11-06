import { ComponentProps } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { themas } from '../global/themes';
import Produto from '../pages/produto';
import Saida from '../pages/saida';
import Estoque from '../pages/estoque';
import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const icons: Record<
  keyof BottomTabParamList,
  ComponentProps<typeof MaterialIcons>['name']
> = {
  Produto: 'add-box',
  Saida: 'output',
  Estoque: 'warehouse',
};

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Produto"
      screenOptions={({ route }) => ({
        // Cada página tem seu próprio cabeçalho, sem o título "BottomRoutes".
        headerShown: false,
        tabBarActiveTintColor: themas.Colors.accent,
        tabBarInactiveTintColor: themas.Colors.gray,
        tabBarActiveBackgroundColor: themas.Colors.accentSurface,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: themas.Colors.surface,
          borderTopColor: themas.Colors.border,
          paddingTop: 8,
        },
        tabBarItemStyle: {
          borderRadius: 12,
          marginHorizontal: 6,
          marginBottom: 6,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600', marginBottom: 3 },
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name={icons[route.name]} color={color} size={size} />
        ),
      })}
    >
      <Tab.Screen
        name="Produto"
        component={Produto}
        options={{ title: 'Novo Produto' }}
      />
      <Tab.Screen
        name="Saida"
        component={Saida}
        options={{ title: 'Saída de Produto', tabBarLabel: 'Saída' }}
      />
      <Tab.Screen
        name="Estoque"
        component={Estoque}
        options={{ title: 'Controle de Estoque', tabBarLabel: 'Estoque' }}
      />
    </Tab.Navigator>
  );
}
