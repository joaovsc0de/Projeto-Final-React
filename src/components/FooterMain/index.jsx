import React from 'react';
import styles from './FooterMain.module.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function MainFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.column}>
          <h3>Sobre</h3>
          <p>A Dragon Store é uma loja dedicada aos apaixonados por games. Qualidade, preço justo e atendimento nota 10!</p>
        </div>

        <div className={styles.column}>
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/cadastro">Cadastro</a></li>
          </ul>
        </div>
{/* console.log("oi"); */}
        <div className={styles.column}>
          <h3>Siga-nos</h3>
          <div className={styles.social}>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Dragon Store. Todos os direitos reservados.
      </div>
    </footer>
  );
}
