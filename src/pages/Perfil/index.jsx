import React, { useEffect, useState, useContext } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import Header from "../../components/Header";
import axios from "axios"; 
import styles from './Perfil.module.css';
import Footer from "../../components/Footer";
import { AuthContext } from '../../contexts/AuthContext'; 

const Perfil = () => {
  const { user, loading } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!loading && !user) {
      console.log("Nenhum usuário logado. Redirecionando para a página de login.");
      navigate('/login');
    }
  }, [loading, user, navigate]);

  
  if (loading) {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <main className={styles.perfilCard}>
            <p>Carregando informações do perfil...</p>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <main className={styles.perfilCard}>
            <p className={styles.errorMessage}>Você precisa estar logado para ver esta página.</p>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <main className={styles.perfilCard}>
          <h1 className={styles.title}>Meu Perfil</h1>

          <div className={styles.clienteInfo}>
            <div className={styles.clienteAvatar}>
              <img src={user.url} alt="Não foi possível carregar avatar" className={styles.avatarImage} />
            </div>
            <div className={styles.infoGroup}>
              <span className={styles.label}>Nome:</span>
              <span className={styles.value}>{user.nome}</span>
            </div>
            <div className={styles.infoGroup}>
              <span className={styles.label}>Telefone:</span>
              <span className={styles.value}>{user.telefone}</span>
            </div>
            <div className={styles.infoGroup}>
              <span className={styles.label}>Email:</span>
              <span className={styles.value}>{user.email}</span>
            </div>
            {/* <div className={styles.infoGroup}>
              <span className={styles.label}>CPF:</span>
              <span className={styles.value}>{user.cpf}</span>
            </div>
            <div className={styles.infoGroup}>
              <span className={styles.label}>CEP:</span>
              <span className={styles.value}>{user.cep}</span>
            </div> */}
            {user.complemento && ( 
              <div className={styles.infoGroup}>
                <span className={styles.label}>Complemento:</span>
                <span className={styles.value}>{user.complemento}</span>
              </div>
            )}
          </div>

          <Link to={`/update/${user.id}`}>
            <button className={styles.editButton}>
              Editar Perfil
            </button>
          </Link>

        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Perfil;