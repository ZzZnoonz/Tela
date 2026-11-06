import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  card: {
    backgroundColor: themas.Colors.surface,
    borderColor: themas.Colors.border,
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  details: { flex: 1, paddingRight: 12 },
  code: {
    color: themas.Colors.gray,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 5,
  },
  name: { color: themas.Colors.text, fontSize: 15, fontWeight: '600' },
  quantityBox: { alignItems: 'flex-end' },
  quantity: { fontSize: 28, fontWeight: '700' },
  unit: { color: themas.Colors.gray, fontSize: 10, marginTop: 1 },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 7,
    gap: 5,
  },
  status: { fontSize: 11, fontWeight: '600' },
  minimum: { color: themas.Colors.gray, fontSize: 11 },
});
