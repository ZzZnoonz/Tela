import { useState } from 'react';

export function useLoginController() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function entrar(): Promise<boolean> {
    if (loading) return false;

    // Validação antes de ativar o loading: campos vazios não travam o botão.
    if (!email.trim() || !password) {
      setError('Informe o e-mail e a senha.');
      return false;
    }

    setError('');
    setLoading(true);

    try {
      // Simula a espera do login usado em aula; não é autenticação de produção.
      await new Promise<void>((resolve) => setTimeout(resolve, 400));

      if (
        email.trim().toLowerCase() !== 'abdielb@yahoo.com' ||
        password !== '12345'
      ) {
        setError('Usuário ou senha incorretos.');
        return false;
      }

      return true;
    } finally {
      setLoading(false);
    }
  }

  return { email, setEmail, password, setPassword, loading, error, entrar };
}
