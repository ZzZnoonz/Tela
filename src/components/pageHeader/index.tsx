import { ComponentProps } from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { themas } from '../../global/themes';
import { style } from './styles';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon: ComponentProps<typeof MaterialIcons>['name'];
}

export function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
  return (
    <View style={style.container}>
      <Text style={style.eyebrow}>GESTÃO DE ESTOQUE</Text>
      <View style={style.row}>
        <View style={style.icon}>
          <MaterialIcons name={icon} size={28} color={themas.Colors.accent} />
        </View>
        <View style={style.text}>
          <Text accessibilityRole="header" style={style.title}>
            {title}
          </Text>
          <Text style={style.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
}
