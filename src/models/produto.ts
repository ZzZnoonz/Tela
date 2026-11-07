export type StockStatus = 'Em Estoque' | 'Estoque Baixo';

export interface StockProduct {
  id: number;
  nome: string;
  sku: string;
  quantidade: number;
  estoqueMinimo: number;
}

export const motivosSaida = ['Venda', 'Avarias', 'Uso Interno'] as const;

export type MotivoSaida = (typeof motivosSaida)[number];

export const produtosEmEstoque: StockProduct[] = [
  {
    id: 1,
    nome: 'Teclado Mecânico',
    sku: 'TEC-001',
    quantidade: 18,
    estoqueMinimo: 8,
  },
  {
    id: 2,
    nome: 'Mouse sem fio',
    sku: 'MOU-014',
    quantidade: 4,
    estoqueMinimo: 6,
  },
  {
    id: 3,
    nome: 'Monitor 24 polegadas',
    sku: 'MON-024',
    quantidade: 11,
    estoqueMinimo: 5,
  },
  {
    id: 4,
    nome: 'Cabo HDMI',
    sku: 'CAB-008',
    quantidade: 3,
    estoqueMinimo: 10,
  },
];
