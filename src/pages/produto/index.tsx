import React, { useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Input } from '../../components/input';
import { PageHeader } from '../../components/pageHeader';
import { useProdutoController } from '../../controllers/produtoController';
import { themas } from '../../global/themes';
import { style } from './styles';

export default function Produto() {
  const {
    nome,
    setNome,
    preco,
    setPreco,
    quantidade,
    setQuantidade,
    cadastrarProduto,
  } = useProdutoController();

  const precoRef = useRef<TextInput>(null);
  const quantidadeRef = useRef<TextInput>(null);

  return (
    <SafeAreaView style={style.container} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={style.content}
          keyboardShouldPersistTaps="handled"
        >
          <PageHeader
            title="Novo Produto"
            subtitle="Entrada de estoque"
            icon="add-box"
          />

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
    </SafeAreaView>
  );
}
