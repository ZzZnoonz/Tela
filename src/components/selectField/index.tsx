import { ComponentProps, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { themas } from '../../global/themes';
import { style } from './styles';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

interface SelectFieldProps<T extends string> {
  label: string;
  icon: IconName;
  placeholder: string;
  options: readonly T[];
  value: T | null;
  onSelect: (option: T) => void;
}

export function SelectField<T extends string>({
  label,
  icon,
  placeholder,
  options,
  value,
  onSelect,
}: SelectFieldProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(option: T) {
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>

      <TouchableOpacity
        style={[style.select, isOpen && style.selectOpen]}
        activeOpacity={0.8}
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        onPress={() => setIsOpen((current) => !current)}
      >
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={themas.Colors.gray}
        />
        <Text style={[style.value, !value && style.placeholder]}>
          {value ?? placeholder}
        </Text>
        <MaterialCommunityIcons
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={24}
          color={themas.Colors.gray}
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={style.options}>
          {options.map((option, index) => {
            const selected = option === value;

            return (
              <TouchableOpacity
                key={option}
                style={[
                  style.option,
                  index < options.length - 1 && style.optionBorder,
                  selected && style.optionSelected,
                ]}
                activeOpacity={0.8}
                onPress={() => handleSelect(option)}
              >
                <Text style={[style.optionText, selected && style.optionTextSelected]}>
                  {option}
                </Text>
                {selected && (
                  <MaterialCommunityIcons
                    name="check"
                    size={20}
                    color={themas.Colors.text}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}
