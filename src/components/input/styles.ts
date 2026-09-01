import { StyleSheet } from 'react-native';

import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 27,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 55,
    zIndex: 1,
    paddingHorizontal: 8,
    color: themas.Colors.primary,
    backgroundColor: themas.Colors.bgScreen,
    fontSize: 16,
  },
  boxInput: {
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: themas.Colors.primary,
    borderRadius: 9,
    backgroundColor: themas.Colors.bgScreen,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 14,
    color: themas.Colors.text,
    fontSize: 18,
  },
});
