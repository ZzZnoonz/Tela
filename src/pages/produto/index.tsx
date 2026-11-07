import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Input } from '../../components/input';
import { PrimaryButton } from '../../components/primaryButton';
import { ScreenHeader } from '../../components/screenHeader';
import { useProdutoController } from '../../controllers/useProdutoController';
import { style } from './styles';

export default function Produto() {
  const {
    nome,
    setNome,
    preco,
    setPreco,
    quantidade,
    setQuantidade,
    precoRef,
    quantidadeRef,
    cadastrarProduto,
  } = useProdutoController();

  return (
    <SafeAreaView style={style.safeArea} edges={['top']}>
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={style.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <ScreenHeader
            title="Novo Produto"
            subtitle="Cadastre uma entrada no estoque"
            icon="package-variant-closed-plus"
          />

          <View style={style.form}>
            <Text style={style.sectionTitle}>DADOS DO PRODUTO</Text>

            <Input
              label="Nome"
              icon="label-outline"
              placeholder="Nome do produto"
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
              label="Quantidade de entrada"
              icon="inventory-2"
              placeholder="0"
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="number-pad"
              returnKeyType="done"
              onSubmitEditing={cadastrarProduto}
            />

            <PrimaryButton
              label="CADASTRAR PRODUTO"
              icon="check-circle-outline"
              onPress={cadastrarProduto}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
