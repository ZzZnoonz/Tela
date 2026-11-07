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
  select: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 14,
    backgroundColor: themas.Colors.surfaceStrong,
  },
  selectOpen: {
    borderColor: themas.Colors.gray,
  },
  value: {
    flex: 1,
    marginLeft: 12,
    color: themas.Colors.text,
    fontSize: 16,
  },
  placeholder: {
    color: themas.Colors.gray,
  },
  options: {
    marginTop: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 14,
    backgroundColor: themas.Colors.surfaceStrong,
  },
  option: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  optionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: themas.Colors.border,
  },
  optionSelected: {
    backgroundColor: themas.Colors.primaryMuted,
  },
  optionText: {
    color: themas.Colors.textMuted,
    fontSize: 15,
  },
  optionTextSelected: {
    color: themas.Colors.text,
    fontWeight: '700',
  },
});
