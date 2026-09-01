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
    paddingHorizontal: 28,
    paddingTop: 55,
    paddingBottom: 38,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    flex: 1,
    marginLeft: 17,
    color: themas.Colors.text,
    fontSize: 31,
    fontWeight: '700',
  },
  form: {
    width: '100%',
  },
  button: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    borderRadius: 8,
    backgroundColor: themas.Colors.primary,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    color: themas.Colors.secondary,
    fontSize: 18,
    fontWeight: '700',
  },
});
