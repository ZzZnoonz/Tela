import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: { width: '100%', marginBottom: 20 },
  label: {
    color: themas.Colors.secondary,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginLeft: 4,
  },
  trigger: {
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 14,
    backgroundColor: themas.Colors.surfaceStrong,
  },
  value: { flex: 1, color: themas.Colors.text, fontSize: 16, marginLeft: 12 },
  options: {
    backgroundColor: themas.Colors.surfaceStrong,
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 14,
    padding: 6,
    marginTop: 8,
  },
  option: {
    minHeight: 48,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 9,
  },
  selected: { backgroundColor: themas.Colors.accentSurface },
  optionText: { color: themas.Colors.text, fontSize: 15 },
});
