import { StyleSheet } from 'react-native';

import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: themas.Colors.bgScreen,
  },
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 28,
  },
  form: {
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 24,
    backgroundColor: themas.Colors.surface,
  },
  sectionTitle: {
    marginBottom: 22,
    color: themas.Colors.gray,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: 15,
    borderRadius: 16,
    backgroundColor: themas.Colors.primaryMuted,
  },
  infoText: {
    flex: 1,
    marginLeft: 10,
    color: themas.Colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
});
