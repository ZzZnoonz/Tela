import { ComponentProps } from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { themas } from '../../global/themes';
import { style } from './styles';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

interface ScreenHeaderProps {
  title: string;
  subtitle: string;
  icon: IconName;
}

export function ScreenHeader({ title, subtitle, icon }: ScreenHeaderProps) {
  return (
    <View style={style.container}>
      <View style={style.iconBox}>
        <MaterialCommunityIcons
          name={icon}
          size={29}
          color={themas.Colors.text}
        />
      </View>

      <View style={style.textBox}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}
