import React, { useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Input } from '../../components/input';
import { themas } from '../../global/themes';
import { style } from './styles';

export default function Produto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const precoRef = useRef<TextInput>(null);
  const quantidadeRef = useRef<TextInput>(null);

  function cadastrarProduto() {
    if (!nome.trim() || !preco.trim() || !quantidade.trim()) {
      return Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.');
    }

    const valorDoProduto = Number(preco.replace(',', '.'));
    const quantidadeDeEntrada = Number(quantidade);

    if (Number.isNaN(valorDoProduto) || valorDoProduto <= 0) {
      return Alert.alert('Atenção', 'Informe um preço válido.');
    }

    if (!Number.isInteger(quantidadeDeEntrada) || quantidadeDeEntrada <= 0) {
      return Alert.alert('Atenção', 'Informe uma quantidade válida.');
    }

    Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
    setNome('');
    setPreco('');
    setQuantidade('');
  }

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={style.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={style.header}>
          <View style={style.headerIcon}>
            <MaterialIcons
              name="inventory-2"
              size={31}
              color={themas.Colors.text}
            />
          </View>

          <View style={style.headerText}>
            <Text style={style.title}>Novo Produto</Text>
            <Text style={style.subtitle}>Entrada de estoque</Text>
          </View>
        </View>

        <View style={style.form}>
          <Text style={style.sectionTitle}>DADOS DO PRODUTO</Text>

          <Input
            label="Nome"
            icon="label-outline"
            placeholder="Nome do Produto"
            value={nome}
            onChangeText={setNome}
            returnKeyType="next"
            onSubmitEditing={() => precoRef.current?.focus()}
          />

          <Input
            ref={precoRef}
            label="Preço"
            icon="attach-money"
            placeholder="R$ 0,00"
            value={preco}
            onChangeText={setPreco}
            keyboardType="decimal-pad"
            returnKeyType="next"
            onSubmitEditing={() => quantidadeRef.current?.focus()}
          />

          <Input
            ref={quantidadeRef}
            label="Quantidade de Entrada"
            icon="inventory-2"
            placeholder="0"
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={cadastrarProduto}
          />

          <TouchableOpacity
            style={style.button}
            activeOpacity={0.8}
            onPress={cadastrarProduto}
          >
            <MaterialIcons
              name="check-circle-outline"
              size={22}
              color={themas.Colors.secondary}
              style={style.buttonIcon}
            />
            <Text style={style.buttonText}>CADASTRAR PRODUTO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
