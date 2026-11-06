import { useState } from 'react';
import { Alert } from 'react-native';

export function useProdutoController() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  function cadastrarProduto() {
    if (!nome.trim() || !preco.trim() || !quantidade.trim()) {
      return Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.');
    }

    const valorDoProduto = Number(preco.replace(',', '.'));
    const quantidadeDeEntrada = Number(quantidade);

    if (!Number.isFinite(valorDoProduto) || valorDoProduto <= 0) {
      return Alert.alert('Atenção', 'Informe um preço válido.');
    }

    if (!Number.isInteger(quantidadeDeEntrada) || quantidadeDeEntrada <= 0) {
      return Alert.alert('Atenção', 'Informe uma quantidade válida.');
    }

    Alert.alert(
      'Demonstração',
      'Dados validados. Esta atividade não salva produtos no estoque.',
    );
    setNome('');
    setPreco('');
    setQuantidade('');
  }

  return {
    nome,
    setNome,
    preco,
    setPreco,
    quantidade,
    setQuantidade,
    cadastrarProduto,
  };
}
