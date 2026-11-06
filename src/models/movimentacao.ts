export const motivosRetirada = ['Venda', 'Avarias', 'Uso Interno'] as const;

export type MotivoRetirada = (typeof motivosRetirada)[number];
