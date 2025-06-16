import React from 'react';
import styles from './Error.module.css'; 

const Error = () => {
  return (
    <div className={styles.container}> 
      <h1 className={styles.heading}>404</h1>
      <p className={styles.message}>Ops! A página que você está procurando não foi encontrada.</p>
      <a href="/" className={styles.link}>Voltar para a Página Inicial</a>
    </div>
  );
}

export default Error;