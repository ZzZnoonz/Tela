export interface Produto {
  id: string;
  nome: string;
  quantidade: number;
  estoqueMinimo: number;
}

export type StatusEstoque = 'Em Estoque' | 'Estoque Baixo';
