import { StyleSheet } from 'react-native';

import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  button: {
    width: '100%',
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 16,
    backgroundColor: themas.Colors.primary,
    shadowColor: themas.Colors.primary,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.28,
    shadowRadius: 9,
    elevation: 7,
  },
  disabled: {
    opacity: 0.65,
  },
  icon: {
    marginRight: 9,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
});
