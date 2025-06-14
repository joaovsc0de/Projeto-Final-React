import React, { useState } from 'react';
import styles from './Login.module.css';
import { FaUser, FaLock } from 'react-icons/fa';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const API_BASE_URL = "http://localhost:8080";

  const logar = async (event) => {
    event.preventDefault();

    setError('');
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        username: username,
        password: password,
      });

      console.log('Dados completos da resposta da API:', response); // Mantenha para depuração se quiser
      console.log('Conteúdo de response.data:', response.data); // Mantenha para depuração se quiser
      console.log('Conteúdo de response.headers:', response.headers); // Mantenha para ver os cabeçalhos

      // --- CORREÇÃO AQUI ---
      // O token está no cabeçalho 'authorization'
      let token = response.headers.authorization;

      // O token vem no formato "Bearer SEU_TOKEN". Precisamos remover "Bearer "
      if (token && token.startsWith('Bearer ')) {
        token = token.substring(7); // Remove "Bearer " (7 caracteres)
      }

      if (token) {
        localStorage.setItem('authToken', token); // Armazena o token limpo
        console.log("Login bem-sucedido! Token:", token);
        navigate("/loja");
      } else {
        setError("Token não recebido no cabeçalho 'Authorization' da API.");
        console.warn("Resposta da API (sem token esperado no cabeçalho):", response.headers);
      }
    } catch (err) {
      console.error("Erro de login:", err);
      if (err.response) {
        if (err.response.status === 401) {
          setError("Credenciais inválidas. Verifique seu nome de usuário e senha.");
        } else if (err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("Erro no servidor. Tente novamente mais tarde.");
        }
      } else if (err.request) {
        setError("Não foi possível conectar ao servidor. Verifique sua conexão de rede ou o status da API.");
      } else {
        setError("Erro ao processar a requisição de login.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.logo}>
            <img src="/src/assets/pngegg.png" alt="Dragon Store Logo" className={styles.logoImage} />
            <h1 className={styles.title}>Dragon Store</h1>
          </div>
          <form className={styles.form} onSubmit={logar}>
            {error && <p className={styles.errorMessage}>{error}</p>}

            <div className={styles.inputGroup}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                placeholder="Digite seu nome"
                id='username'
                name='username'
                className={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <FaLock className={styles.icon} />
              <input
                type="password"
                placeholder="Digite sua senha"
                id='password'
                name='password'
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? 'Entrando...' : 'Login'}
            </button>

            <button type="button" className={styles.registerButton} onClick={() => window.location.href = '/cadastro'}>
              CADASTRAR
            </button>
            <Footer />
          </form>
        </div>
      </div>
    </div>
  );
}