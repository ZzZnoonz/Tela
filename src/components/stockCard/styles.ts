import { StyleSheet } from 'react-native';

import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  card: {
    minHeight: 116,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: themas.Colors.border,
    borderRadius: 18,
    backgroundColor: themas.Colors.surface,
  },
  productIcon: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: themas.Colors.surfaceStrong,
  },
  productInfo: {
    flex: 1,
    marginHorizontal: 12,
  },
  productName: {
    color: themas.Colors.text,
    fontSize: 15,
    fontWeight: '700',
  },
  sku: {
    marginTop: 3,
    color: themas.Colors.gray,
    fontSize: 11,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },
  statusAvailable: {
    backgroundColor: themas.Colors.successMuted,
  },
  statusLow: {
    backgroundColor: themas.Colors.warningMuted,
  },
  statusDot: {
    width: 6,
    height: 6,
    marginRight: 6,
    borderRadius: 3,
  },
  dotAvailable: {
    backgroundColor: themas.Colors.success,
  },
  dotLow: {
    backgroundColor: themas.Colors.warning,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '800',
  },
  textAvailable: {
    color: themas.Colors.success,
  },
  textLow: {
    color: themas.Colors.warning,
  },
  quantityBox: {
    alignItems: 'flex-end',
  },
  quantity: {
    color: themas.Colors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  unit: {
    marginTop: 1,
    color: themas.Colors.gray,
    fontSize: 10,
  },
});
