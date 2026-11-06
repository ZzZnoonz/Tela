import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: themas.Colors.bgScreen },
  content: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 28,
    paddingBottom: 32,
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },
  form: {
    padding: 20,
    backgroundColor: themas.Colors.surface,
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 24,
  },
  sectionTitle: {
    color: themas.Colors.gray,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 24,
  },
  button: {
    minHeight: 56,
    borderRadius: 14,
    backgroundColor: themas.Colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    marginTop: 4,
  },
  buttonText: {
    color: themas.Colors.primary,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  notice: { flexDirection: 'row', gap: 9, marginTop: 22, paddingHorizontal: 4 },
  noticeText: {
    flex: 1,
    color: themas.Colors.gray,
    fontSize: 12,
    lineHeight: 18,
  },
});
