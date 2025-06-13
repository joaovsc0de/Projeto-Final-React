import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span>© 2025 Dragon Store</span>
      </div>

      <div className={styles.links}>
        <a href="#" className={styles.link}>
          <FaInstagram /> Instagram
        </a>
        <a href="mailto:darkdragonsstore@gmail.com" className={styles.link}>
          <FaEnvelope /> Contato
        </a>
      </div>
    </footer>
  );
}
