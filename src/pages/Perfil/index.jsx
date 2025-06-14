import React, { useEffect } from "react";
import Header from "../../components/Header";
import axios from "axios";
import styles from './Perfil.module.css'

const Perfil = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/clientes/listar")
      .then((response) => {
        setJogos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar perfil: ", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.perfil-usuario}>
{/* console.log("oi"); */}
      </main>
    </div>
  );
};

export default Perfil;
