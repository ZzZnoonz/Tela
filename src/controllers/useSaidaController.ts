import { useState } from 'react';
import { Alert } from 'react-native';

import { MotivoSaida } from '../models/produto';

export function useSaidaController() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [motivo, setMotivo] = useState<MotivoSaida | null>(null);

  function registrarSaida() {
    const quantidadeNumerica = Number(quantidade);

    if (!nomeProduto.trim() || !quantidade.trim() || !motivo) {
      Alert.alert('Atenção', 'Preencha todos os campos da saída.');
      return;
    }

    if (!Number.isInteger(quantidadeNumerica) || quantidadeNumerica <= 0) {
      Alert.alert('Atenção', 'Informe uma quantidade válida.');
      return;
    }

    Alert.alert('Saída registrada', `${quantidade} item(ns) retirado(s) por ${motivo}.`);
    setNomeProduto('');
    setQuantidade('');
    setMotivo(null);
  }

  return {
    nomeProduto,
    setNomeProduto,
    quantidade,
    setQuantidade,
    motivo,
    setMotivo,
    registrarSaida,
  };
}
