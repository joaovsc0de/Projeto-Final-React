import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import styles from "./Perfil.module.css";

const Perfil = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/clientes/1") 
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar perfil:", error);
      });
  }, []);

  if (!usuario) {
    return <p>Carregando perfil...</p>;
  }

  return (
    <div>
      <Header />
      <main className={styles["perfil-usuario"]}>
        <h1 className={styles.titulo}>Perfil do Usuário</h1>
        <div className={styles.container}>
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/150"
              alt="Foto do Usuário"
              className={styles.foto}
            />
            <h2 className={styles.nome}>{usuario.nome}</h2>
            <p className={styles.email}>Email: {usuario.email}</p>
            <p className={styles.status}>
              Status: {usuario.online ? "🟢 Online" : "🔴 Offline"}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Perfil;
