import {
  StockProduct,
  StockStatus,
} from '../models/produto';

export function obterStatusProduto(produto: StockProduct): StockStatus {
  return produto.quantidade <= produto.estoqueMinimo
    ? 'Estoque Baixo'
    : 'Em Estoque';
}

export function calcularResumoEstoque(produtos: StockProduct[]) {
  return produtos.reduce(
    (resumo, produto) => {
      resumo.totalItens += produto.quantidade;

      if (obterStatusProduto(produto) === 'Estoque Baixo') {
        resumo.itensComEstoqueBaixo += 1;
      }

      return resumo;
    },
    { totalItens: 0, itensComEstoqueBaixo: 0 }
  );
}
