import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: themas.Colors.bgScreen },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    paddingVertical: 40,
    width: '100%',
    maxWidth: 550,
    alignSelf: 'center',
  },
  brand: { alignItems: 'center', marginBottom: 32 },
  logo: { width: 64, height: 64, resizeMode: 'contain', marginBottom: 22 },
  eyebrow: {
    color: themas.Colors.accent,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 12,
  },
  title: {
    color: themas.Colors.text,
    fontSize: 27,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: themas.Colors.gray,
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  form: {
    padding: 20,
    backgroundColor: themas.Colors.surface,
    borderColor: themas.Colors.border,
    borderWidth: 1,
    borderRadius: 24,
  },
  error: {
    color: themas.Colors.red,
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 16,
  },
  button: {
    minHeight: 56,
    borderRadius: 14,
    backgroundColor: themas.Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: { opacity: 0.65 },
  buttonText: { color: themas.Colors.primary, fontSize: 17, fontWeight: '700' },
  demo: {
    color: themas.Colors.gray,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
    textAlign: 'center',
    marginTop: 26,
  },
  credentials: {
    color: themas.Colors.gray,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
  },
});
