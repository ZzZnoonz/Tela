import { useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';

export function useProdutoController() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const precoRef = useRef<TextInput>(null);
  const quantidadeRef = useRef<TextInput>(null);

  function cadastrarProduto() {
    if (!nome.trim() || !preco.trim() || !quantidade.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.');
      return;
    }

    const valorDoProduto = Number(preco.replace(',', '.'));
    const quantidadeDeEntrada = Number(quantidade);

    if (Number.isNaN(valorDoProduto) || valorDoProduto <= 0) {
      Alert.alert('Atenção', 'Informe um preço válido.');
      return;
    }

    if (!Number.isInteger(quantidadeDeEntrada) || quantidadeDeEntrada <= 0) {
      Alert.alert('Atenção', 'Informe uma quantidade válida.');
      return;
    }

    Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
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
    precoRef,
    quantidadeRef,
    cadastrarProduto,
  };
}
