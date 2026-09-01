import React, { ComponentProps, forwardRef } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { themas } from '../../global/themes';
import { style } from './styles';

type IconName = ComponentProps<typeof MaterialIcons>['name'];

interface InputProps extends TextInputProps {
  label: string;
  icon: IconName;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, icon, style: inputStyle, ...rest }, ref) => {
    return (
      <View style={style.container}>
        <Text style={style.label}>{label}</Text>

        <View style={style.boxInput}>
          <MaterialIcons
            name={icon}
            size={27}
            color={themas.Colors.gray}
          />

          <TextInput
            ref={ref}
            style={[style.input, inputStyle]}
            placeholderTextColor={themas.Colors.gray}
            {...rest}
          />
        </View>
      </View>
    );
  }
);

Input.displayName = 'Input';
