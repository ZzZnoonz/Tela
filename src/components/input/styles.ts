import { StyleSheet } from 'react-native';

import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    marginLeft: 4,
    color: themas.Colors.secondary,
    fontSize: 14,
    fontWeight: '600',
  },
  boxInput: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 14,
    backgroundColor: themas.Colors.surfaceStrong,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 12,
    color: themas.Colors.text,
    fontSize: 16,
  },
});
