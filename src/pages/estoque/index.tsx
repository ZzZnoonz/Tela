import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import { PageHeader } from '../../components/pageHeader';
import { ProductCard } from '../../components/productCard';
import {
  obterControleEstoque,
  obterStatusEstoque,
} from '../../controllers/estoqueController';
import { themas } from '../../global/themes';
import { style } from './styles';

export default function Estoque() {
  const { produtos, totalProdutos, totalUnidades, totalEstoqueBaixo } =
    obterControleEstoque();

  return (
    <SafeAreaView style={style.container} edges={['top', 'left', 'right']}>
      <FlatList
        data={produtos}
        keyExtractor={(produto) => produto.id}
        contentContainerStyle={style.content}
        ListHeaderComponent={
          <>
            <PageHeader
              title="Controle de Estoque"
              subtitle="Acompanhe os produtos disponíveis"
              icon="warehouse"
            />
            <View style={style.summary}>
              <View style={style.metric}>
                <Text style={style.metricLabel}>UNIDADES EM ESTOQUE</Text>
                <Text style={style.metricValue}>{totalUnidades}</Text>
              </View>
              <View style={style.divider} />
              <View style={style.metric}>
                <Text style={style.metricLabel}>PRODUTOS</Text>
                <Text style={style.productCount}>
                  {String(totalProdutos).padStart(2, '0')}
                </Text>
              </View>
            </View>
            <View style={style.alert}>
              <MaterialIcons
                name="warning-amber"
                color={themas.Colors.warning}
                size={18}
              />
              <Text style={style.alertText}>
                {totalEstoqueBaixo} produto com estoque baixo
              </Text>
            </View>
            <View style={style.listHeading}>
              <Text style={style.sectionTitle}>SEUS PRODUTOS</Text>
              <Text style={style.count}>{totalProdutos} itens</Text>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <ProductCard produto={item} status={obterStatusEstoque(item)} />
        )}
        ListFooterComponent={
          <Text style={style.footer}>
            Inventário demonstrativo · dados locais
          </Text>
        }
      />
    </SafeAreaView>
  );
}
