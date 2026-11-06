import { Produto, StatusEstoque } from '../models/produto';

// Dados locais para a atividade: não há banco de dados nem persistência.
const produtos: readonly Produto[] = [
  {
    id: 'PRD-001',
    nome: 'Arroz integral 1 kg',
    quantidade: 24,
    estoqueMinimo: 5,
  },
  {
    id: 'PRD-002',
    nome: 'Feijão carioca 1 kg',
    quantidade: 3,
    estoqueMinimo: 5,
  },
  {
    id: 'PRD-003',
    nome: 'Açúcar cristal 1 kg',
    quantidade: 18,
    estoqueMinimo: 5,
  },
];

export function obterStatusEstoque(produto: Produto): StatusEstoque {
  return produto.quantidade <= produto.estoqueMinimo
    ? 'Estoque Baixo'
    : 'Em Estoque';
}

export function obterControleEstoque() {
  return {
    produtos,
    totalProdutos: produtos.length,
    totalUnidades: produtos.reduce(
      (total, produto) => total + produto.quantidade,
      0,
    ),
    totalEstoqueBaixo: produtos.filter(
      (produto) => obterStatusEstoque(produto) === 'Estoque Baixo',
    ).length,
  };
}
