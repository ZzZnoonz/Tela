import { StyleSheet } from 'react-native';

import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: themas.Colors.bgScreen,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 24,
  },
  summaryRow: {
    flexDirection: 'row',
    marginBottom: 27,
  },
  summaryCard: {
    flex: 1,
    minHeight: 142,
    padding: 16,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: themas.Colors.surface,
  },
  summaryCardPrimary: {
    marginRight: 6,
    borderColor: themas.Colors.primaryMuted,
  },
  summaryCardWarning: {
    marginLeft: 6,
    borderColor: themas.Colors.warningMuted,
  },
  summaryIconPrimary: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: themas.Colors.primaryMuted,
  },
  summaryIconWarning: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: themas.Colors.warningMuted,
  },
  summaryValue: {
    marginTop: 13,
    color: themas.Colors.text,
    fontSize: 25,
    fontWeight: '800',
  },
  summaryLabel: {
    marginTop: 3,
    color: themas.Colors.gray,
    fontSize: 11,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 13,
    paddingHorizontal: 3,
  },
  sectionTitle: {
    color: themas.Colors.gray,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  productCount: {
    minWidth: 28,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
    borderRadius: 8,
    backgroundColor: themas.Colors.surfaceStrong,
  },
  productCountText: {
    color: themas.Colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
  },
});
