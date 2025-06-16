import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Importe useParams
import Header from "../../components/Header";
import axios from "axios";
import styles from './Perfil.module.css';
import Footer from "../../components/Footer";

const Perfil = () => {
  const { id } = useParams(); // Obtém o 'id' da URL
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClienteData = async () => {
      setLoading(true);
      setError(null);

      // Verifica se o ID está presente antes de fazer a requisição
      // if (!id) {
      //   setError("ID do cliente não fornecido na URL.");
      //   setLoading(false);
      //   return;
      // }

      const response = await axios.get(`http://localhost:8080/clientes/listar/3`);

      // Sua resposta parece ser um objeto direto, não um array.
      // Se a resposta for um array, mantenha response.data[0].
      // Se a resposta for um objeto direto, use response.data.
      if (response.data) {
        setCliente(response.data); // Define o cliente diretamente
      } else {
        setError("Nenhum cliente encontrado com este ID.");
      }
      setLoading(false);
    };

    fetchClienteData();
  }, [id]); // Adicione 'id' como dependência para que a requisição seja feita quando o ID mudar

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <main className={styles.perfilCard}>
          <h1 className={styles.title}>Meu Perfil</h1>

          {loading && <p>Carregando dados do perfil...</p>}
          {error && <p className={styles.errorMessage}>{error}</p>}

          {cliente && (
            <div className={styles.clienteInfo}>
              <div className={styles.clienteAvatar}>
                <img src={cliente.url} alt="Não foi possivel carregar avatar" className={styles.avatarImage} />
              </div>
              <div className={styles.infoGroup}>
                <span className={styles.label}>Nome:</span>
                <span className={styles.value}>{cliente.nome}</span>
              </div>
              <div className={styles.infoGroup}>
                <span className={styles.label}>Telefone:</span>
                <span className={styles.value}>{cliente.telefone}</span>
              </div>
              <div className={styles.infoGroup}>
                <span className={styles.label}>Email:</span>
                <span className={styles.value}>{cliente.email}</span>
              </div>          
            </div>
          )}

          {cliente && (
             <Link to={`/update/${cliente.id}`}>
            <button className={styles.editButton}>
              Editar Perfil
            </button>
            </Link>
          )}
        
        </main>
        
      </div>
      <Footer />
    </div>
  );
};

export default Perfil;