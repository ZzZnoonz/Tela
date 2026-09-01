import { StyleSheet } from 'react-native';

import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.Colors.bgScreen,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 4,
  },
  headerIcon: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 18,
    backgroundColor: themas.Colors.surfaceStrong,
  },
  headerText: {
    marginLeft: 16,
  },
  title: {
    color: themas.Colors.text,
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 3,
    color: themas.Colors.gray,
    fontSize: 14,
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
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  button: {
    width: '100%',
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 15,
    backgroundColor: themas.Colors.primary,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 10,
  },
  buttonIcon: {
    marginRight: 9,
  },
  buttonText: {
    color: themas.Colors.secondary,
    fontSize: 18,
    fontWeight: '700',
  },
});
