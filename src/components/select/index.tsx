import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { themas } from '../../global/themes';
import { style } from './styles';

interface SelectProps<T extends string> {
  label: string;
  value: T;
  options: readonly T[];
  onValueChange: (value: T) => void;
}

export function Select<T extends string>({
  label,
  value,
  options,
  onValueChange,
}: SelectProps<T>) {
  const [open, setOpen] = useState(false);

  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel={`${label}: ${value}`}
        accessibilityState={{ expanded: open }}
        activeOpacity={0.8}
        style={style.trigger}
        onPress={() => setOpen(!open)}
      >
        <MaterialIcons name="list-alt" size={25} color={themas.Colors.gray} />
        <Text style={style.value}>{value}</Text>
        <MaterialIcons
          name={open ? 'expand-less' : 'expand-more'}
          size={25}
          color={themas.Colors.accent}
        />
      </TouchableOpacity>

      {open && (
        <View style={style.options}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              accessibilityRole="button"
              accessibilityLabel={option}
              accessibilityState={{ selected: value === option }}
              style={[style.option, value === option && style.selected]}
              onPress={() => {
                onValueChange(option);
                setOpen(false);
              }}
            >
              <Text style={style.optionText}>{option}</Text>
              {value === option && (
                <MaterialIcons
                  name="check"
                  size={20}
                  color={themas.Colors.accent}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
