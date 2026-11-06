import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import { Input } from '../../components/input';
import { PageHeader } from '../../components/pageHeader';
import { Select } from '../../components/select';
import { MotivoRetirada, motivosRetirada } from '../../models/movimentacao';
import { themas } from '../../global/themes';
import { style } from './styles';

export default function Saida() {
  const [motivo, setMotivo] = useState<MotivoRetirada>('Venda');

  return (
    <SafeAreaView style={style.container} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={style.content}>
        <PageHeader
          title="Saída de Produto"
          subtitle="Retirada de itens do estoque"
          icon="output"
        />
        <View style={style.form}>
          <Text style={style.sectionTitle}>DADOS DA RETIRADA</Text>
          <Input
            label="Nome do produto"
            icon="label-outline"
            value="Arroz integral 1 kg"
            editable={false}
          />
          <Input
            label="Quantidade de saída"
            icon="remove-circle-outline"
            value="2"
            editable={false}
            keyboardType="number-pad"
          />
          <Select
            label="Motivo da retirada"
            value={motivo}
            options={motivosRetirada}
            onValueChange={setMotivo}
          />
          <TouchableOpacity
            style={style.button}
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityLabel="Registrar saída (demonstrativo)"
          >
            <MaterialIcons
              name="output"
              size={21}
              color={themas.Colors.primary}
            />
            <Text style={style.buttonText}>REGISTRAR SAÍDA</Text>
          </TouchableOpacity>
        </View>
        <View style={style.notice}>
          <MaterialIcons
            name="info-outline"
            size={18}
            color={themas.Colors.gray}
          />
          <Text style={style.noticeText}>
            Tela demonstrativa. Os dados são ilustrativos e não alteram o
            estoque.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
