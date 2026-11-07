import { ScrollView, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenHeader } from '../../components/screenHeader';
import { StockCard } from '../../components/stockCard';
import {
  calcularResumoEstoque,
  obterStatusProduto,
} from '../../controllers/estoqueController';
import { themas } from '../../global/themes';
import { produtosEmEstoque } from '../../models/produto';
import { style } from './styles';

export default function ControleEstoque() {
  const resumo = calcularResumoEstoque(produtosEmEstoque);

  return (
    <SafeAreaView style={style.safeArea} edges={['top']}>
      <ScrollView
        contentContainerStyle={style.content}
        showsVerticalScrollIndicator={false}
      >
        <ScreenHeader
          title="Controle de Estoque"
          subtitle="Visão geral do inventário"
          icon="warehouse"
        />

        <View style={style.summaryRow}>
          <View style={[style.summaryCard, style.summaryCardPrimary]}>
            <View style={style.summaryIconPrimary}>
              <MaterialCommunityIcons
                name="package-variant"
                size={23}
                color={themas.Colors.textMuted}
              />
            </View>
            <Text style={style.summaryValue}>{resumo.totalItens}</Text>
            <Text style={style.summaryLabel}>Itens disponíveis</Text>
          </View>

          <View style={[style.summaryCard, style.summaryCardWarning]}>
            <View style={style.summaryIconWarning}>
              <MaterialCommunityIcons
                name="alert-circle-outline"
                size={23}
                color={themas.Colors.warning}
              />
            </View>
            <Text style={style.summaryValue}>{resumo.itensComEstoqueBaixo}</Text>
            <Text style={style.summaryLabel}>Estoque baixo</Text>
          </View>
        </View>

        <View style={style.listHeader}>
          <Text style={style.sectionTitle}>PRODUTOS</Text>
          <View style={style.productCount}>
            <Text style={style.productCountText}>{produtosEmEstoque.length}</Text>
          </View>
        </View>

        {produtosEmEstoque.map((produto) => (
          <StockCard
            key={produto.id}
            produto={produto}
            status={obterStatusProduto(produto)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
