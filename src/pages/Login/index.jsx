import React from 'react';
import styles from './Login.module.css';
import { FaUser, FaLock } from 'react-icons/fa';
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Login() {
  return (
    <div>
      <Header />
      
    <div className={styles.container}>
      
      <div className={styles.loginBox}>
        <div className={styles.logo}>
          <img src="src\assets\pngegg.png" alt="Dragon Store Logo" className={styles.logoImage} />
          <h1 className={styles.title}>Dragon Store</h1>
        </div>

       <form className={styles.form}>
  <div className={styles.inputGroup}>
    <FaUser className={styles.icon} />
    <input type="text" placeholder="Digite seu nome" className={styles.input} />
  </div>

  <div className={styles.inputGroup}>
    <FaLock className={styles.icon} />
    <input type="password" placeholder="Digite sua senha" className={styles.input} />
  </div>

  <button type="submit" className={styles.button}>LOGIN</button>

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
