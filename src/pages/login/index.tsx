import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';

import Logo from '../../assets/logo.png';
import { Input } from '../../components/input';
import { useLoginController } from '../../controllers/loginController';
import { StackParamList } from '../../routes/types';
import { style } from './styles';

type Props = StackScreenProps<StackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
  const { email, setEmail, password, setPassword, loading, error, entrar } =
    useLoginController();

  async function getLogin() {
    if (await entrar()) navigation.replace('BottomRoutes');
  }

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={style.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={style.brand}>
            <Image source={Logo} style={style.logo} />
            <Text style={style.eyebrow}>GESTÃO DE ESTOQUE</Text>
            <Text style={style.title}>Bem-vindo de volta!</Text>
            <Text style={style.subtitle}>
              Entre para acessar seus produtos.
            </Text>
          </View>
          <View style={style.form}>
            <Input
              label="Endereço de e-mail"
              icon="email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu e-mail"
            />
            <Input
              label="Senha"
              icon="lock-outline"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Sua senha"
              returnKeyType="go"
              onSubmitEditing={getLogin}
            />
            {!!error && (
              <Text accessibilityRole="alert" style={style.error}>
                {error}
              </Text>
            )}
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="Entrar"
              style={[style.button, loading && style.loading]}
              disabled={loading}
              onPress={getLogin}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
              ) : (
                <Text style={style.buttonText}>Entrar</Text>
              )}
            </TouchableOpacity>
          </View>
          <Text style={style.demo}>ACESSO DE DEMONSTRAÇÃO</Text>
          <Text style={style.hint}>
            Utilize os dados de teste usados em aula.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
