import React, { useEffect, useState } from "react"; // Importe useState
import Header from "../../components/Header";
import axios from "axios";
import styles from './Perfil.module.css'; // Mantenha a importação do CSS Module

const Perfil = () => {
  const [cliente, setCliente] = useState(null); // Estado para armazenar os dados do cliente
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento
  const [error, setError] = useState(null);   // Estado para erros

  useEffect(() => {
    // Função para buscar os dados do cliente
    const fetchClienteData = async () => {
      try {
        setLoading(true); // Inicia o carregamento
        setError(null);   // Limpa erros anteriores
        // NOTA: 'clientes/listar' geralmente retorna uma lista.
        // Se você quer um cliente específico (o que está logado),
        // precisaria de um endpoint como '/clientes/meu-perfil' ou passar um ID.
        // Por enquanto, vou assumir que 'listar' retorna apenas um cliente
        // ou que vamos pegar o primeiro da lista para simplificar.
        const response = await axios.get("http://localhost:8080/clientes/listar");
        
        if (response.data && response.data.length > 0) {
          setCliente(response.data[0]); // Pega o primeiro cliente da lista
        } else {
          setError("Nenhum cliente encontrado.");
        }
      } catch (err) {
        console.error("Erro ao buscar perfil: ", err);
        setError("Não foi possível carregar os dados do perfil. Tente novamente mais tarde.");
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchClienteData();
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez ao montar

  return (
    <div>
      <Header />
      <div className={styles.container}> {/* Reutiliza o conceito de container */}
        <main className={styles.perfilCard}> {/* Um card similar ao loginBox */}
          <h1 className={styles.title}>Meu Perfil</h1>

          {loading && <p>Carregando dados do perfil...</p>}
          {error && <p className={styles.errorMessage}>{error}</p>}

          {cliente && (
            <div className={styles.clienteInfo}>
              <div className={styles.infoGroup}>
                <span className={styles.label}>Nome:</span>
                <span className={styles.value}>{cliente.nome}</span> {/* Supondo que a API retorna 'nome' */}
              </div>
              <div className={styles.infoGroup}>
                <span className={styles.label}>Email:</span>
                <span className={styles.value}>{cliente.email}</span> {/* Supondo que a API retorna 'email' */}
              </div>
              <div className={styles.infoGroup}>
                <span className={styles.label}>Endereço:</span>
                <span className={styles.value}>
                  {cliente.endereco?.rua}, {cliente.endereco?.numero} - {cliente.endereco?.bairro}, {cliente.endereco?.cidade} - {cliente.endereco?.estado} {/* Exemplo complexo para endereço */}
                </span>
                {/* Ajuste os campos do endereço conforme o JSON real da sua API.
                    Use `?.` (optional chaining) para evitar erros se a propriedade for null/undefined. */}
              </div>
              {/* Adicione outros campos que você queira exibir */}
            </div>
          )}

          {/* Você pode adicionar botões de editar perfil aqui, se quiser */}
          {cliente && (
              <button className={styles.editButton}>Editar Perfil</button>
          )}

        </main>
      </div>
    </div>
  );
};

export default Perfil;