import React from "react";
import styles from "./FooterMain.module.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function MainFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Sobre</h3>
          <p className={styles.paragrafo}>
            A Dragon Store é uma loja dedicada aos apaixonados por games.
            Qualidade, preço justo e atendimento nota 10!
          </p>
        </div>

        <div className={styles.column}>
          <h3>LINKS</h3>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/produtos">PRODUTOS</a>
            </li>
            <li>
              <a href="/login">LOGIN</a>
            </li>
            <li>
              <a href="/cadastro">CADASTRO</a>
            </li>
          </ul>
        </div>
        {/* Adicionei links na home e blank para nova pagina*/}
        <div className={styles.column}>
          <h3>Siga-nos em nossas redes sociais</h3>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/serratecoficial/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/serratecoficial/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://serratec.org/" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Dragon Store. Todos os direitos reservados.
      </div>
    </footer>
  );
}
