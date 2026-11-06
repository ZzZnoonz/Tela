import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Produto, StatusEstoque } from '../../models/produto';
import { themas } from '../../global/themes';
import { style } from './styles';

interface ProductCardProps {
  produto: Produto;
  status: StatusEstoque;
}

export function ProductCard({ produto, status }: ProductCardProps) {
  const baixo = status === 'Estoque Baixo';
  const color = baixo ? themas.Colors.warning : themas.Colors.accent;

  return (
    <View style={style.card}>
      <View style={style.row}>
        <View style={style.details}>
          <Text style={style.code}>{produto.id}</Text>
          <Text style={style.name}>{produto.nome}</Text>
        </View>
        <View style={style.quantityBox}>
          <Text style={[style.quantity, { color }]}>{produto.quantidade}</Text>
          <Text style={style.unit}>unidades</Text>
        </View>
      </View>
      <View style={style.footer}>
        <View
          style={[
            style.badge,
            {
              backgroundColor: baixo
                ? themas.Colors.warningSurface
                : themas.Colors.accentSurface,
            },
          ]}
        >
          <MaterialIcons
            name={baixo ? 'warning-amber' : 'check-circle-outline'}
            color={color}
            size={14}
          />
          <Text style={[style.status, { color }]}>{status}</Text>
        </View>
        <Text style={style.minimum}>Mínimo: {produto.estoqueMinimo} un.</Text>
      </View>
    </View>
  );
}
