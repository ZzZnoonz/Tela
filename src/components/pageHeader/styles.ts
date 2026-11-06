import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: { marginBottom: 26 },
  eyebrow: {
    color: themas.Colors.gray,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 18,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  icon: {
    width: 54,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themas.Colors.accentSurface,
  },
  text: { flex: 1, marginLeft: 14 },
  title: { color: themas.Colors.text, fontSize: 24, fontWeight: '700' },
  subtitle: {
    color: themas.Colors.gray,
    fontSize: 13,
    marginTop: 5,
    lineHeight: 19,
  },
});
