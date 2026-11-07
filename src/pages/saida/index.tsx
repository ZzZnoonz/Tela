import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Input } from '../../components/input';
import { PrimaryButton } from '../../components/primaryButton';
import { ScreenHeader } from '../../components/screenHeader';
import { SelectField } from '../../components/selectField';
import { useSaidaController } from '../../controllers/useSaidaController';
import { themas } from '../../global/themes';
import { motivosSaida } from '../../models/produto';
import { style } from './styles';

export default function SaidaProduto() {
  const {
    nomeProduto,
    setNomeProduto,
    quantidade,
    setQuantidade,
    motivo,
    setMotivo,
    registrarSaida,
  } = useSaidaController();

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
            title="Saída de Produto"
            subtitle="Registre retiradas do estoque"
            icon="package-up"
          />

          <View style={style.form}>
            <Text style={style.sectionTitle}>DADOS DA RETIRADA</Text>

            <Input
              label="Nome do produto"
              icon="inventory-2"
              placeholder="Ex.: Teclado Mecânico"
              value={nomeProduto}
              onChangeText={setNomeProduto}
              returnKeyType="next"
            />

            <Input
              label="Quantidade de saída"
              icon="numbers"
              placeholder="0"
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="number-pad"
              returnKeyType="done"
            />

            <SelectField
              label="Motivo da retirada"
              icon="clipboard-text-outline"
              placeholder="Selecione um motivo"
              options={motivosSaida}
              value={motivo}
              onSelect={setMotivo}
            />

            <PrimaryButton
              label="REGISTRAR SAÍDA"
              icon="arrow-up-bold-circle-outline"
              onPress={registrarSaida}
            />
          </View>

          <View style={style.infoBox}>
            <MaterialCommunityIcons
              name="information-outline"
              size={22}
              color={themas.Colors.textMuted}
            />
            <Text style={style.infoText}>
              A quantidade informada será descontada do saldo atual do produto.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
