import React, { useState, useContext } from 'react'; 
import styles from './Login.module.css';
import { FaUser, FaLock } from 'react-icons/fa';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext' 

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext); 

  const logar = async (event) => {
    event.preventDefault();

    setError('');
    setLoading(true);

    try {

      const success = await login(username, password); 

      if (success) {
        navigate("/loja"); 
      } else {
       
        setError("Falha no login. Credenciais inválidas ou erro ao carregar perfil.");
      }
    } catch (err) {
      
      console.error("Erro de login no componente:", err);
      setError(err.message || "Ocorreu um erro inesperado. Tente novamente mais tarde.");
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
                placeholder="Digite seu email" 
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
           
          </form>
        </div>
      </div>
       <Footer />
    </div>
  );
}