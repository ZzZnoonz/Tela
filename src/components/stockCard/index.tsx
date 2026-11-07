import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { themas } from '../../global/themes';
import { StockProduct, StockStatus } from '../../models/produto';
import { style } from './styles';

interface StockCardProps {
  produto: StockProduct;
  status: StockStatus;
}

export function StockCard({ produto, status }: StockCardProps) {
  const lowStock = status === 'Estoque Baixo';

  return (
    <View style={style.card}>
      <View style={style.productIcon}>
        <MaterialCommunityIcons
          name="package-variant-closed"
          size={25}
          color={themas.Colors.textMuted}
        />
      </View>

      <View style={style.productInfo}>
        <Text style={style.productName} numberOfLines={1}>
          {produto.nome}
        </Text>
        <Text style={style.sku}>{produto.sku}</Text>

        <View
          style={[
            style.statusBadge,
            lowStock ? style.statusLow : style.statusAvailable,
          ]}
        >
          <View
            style={[
              style.statusDot,
              lowStock ? style.dotLow : style.dotAvailable,
            ]}
          />
          <Text
            style={[
              style.statusText,
              lowStock ? style.textLow : style.textAvailable,
            ]}
          >
            {status}
          </Text>
        </View>
      </View>

      <View style={style.quantityBox}>
        <Text style={style.quantity}>{produto.quantidade}</Text>
        <Text style={style.unit}>unidades</Text>
      </View>
    </View>
  );
}
