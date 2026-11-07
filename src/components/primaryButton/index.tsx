import { ComponentProps } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { themas } from '../../global/themes';
import { style } from './styles';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

interface PrimaryButtonProps extends TouchableOpacityProps {
  label: string;
  icon: IconName;
  loading?: boolean;
}

export function PrimaryButton({
  label,
  icon,
  loading = false,
  disabled,
  ...rest
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      accessibilityRole="button"
      disabled={disabled || loading}
      style={[style.button, (disabled || loading) && style.disabled]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" size="small" />
      ) : (
        <>
          <MaterialCommunityIcons
            name={icon}
            size={21}
            color="#FFFFFF"
            style={style.icon}
          />
          <Text style={style.label}>{label}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
