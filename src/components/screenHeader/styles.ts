import { StyleSheet } from 'react-native';

import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  iconBox: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 18,
    backgroundColor: themas.Colors.surfaceStrong,
  },
  textBox: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    color: themas.Colors.text,
    fontSize: 25,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 3,
    color: themas.Colors.gray,
    fontSize: 14,
  },
});
