import React, { useEffect, useState } from "react";

import Header from "../../components/Header";

import axios from "axios";

import styles from "./Carrinho.module.css";

import Footer from "../../components/Footer";

const Carrinho = () => {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [totalCarrinho, setTotalCarrinho] = useState(0);
  const [pedidos, SetPedido] = useState([]);

  useEffect(() => {
    const fetchCarrinhoData = async () => {
      setLoading(true);

      setError(null);
   const response = await axios.get(
          `http://localhost:8080/carrinhos/${7}`
        ).then(()=> console.log("deu certo")
        ) .catch(console.error("Erro ao buscar dados do carrinho: "))  
    };

    fetchCarrinhoData();
  }, []);

  const pagar = () => {
    axios.put(`http://localhost:8080/pedidos/status/${pedidos.id}`);
  };

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.title}>Meu Carrinho</h1>

        {loading && <p>Carregando itens do carrinho...</p>}

        {error && <p className={styles.errorMessage}>{error}</p>}

        {!loading && !error && jogos.length === 0 && (
          <p>Seu carrinho está vazio.</p>
        )}

        {jogos.length > 0 && (
          <main>
            <div className={styles.cards}>
              {jogos.map((jogo, index) => (
                <div className={styles.card} key={index}>
                  <header>
                    <h2>{jogo.nome}</h2>
                  </header>

                  <div className={styles.line} />

                  <p>Valor: R$ {jogo.valor ? jogo.valor.toFixed(2) : "N/A"}</p>

                  <p>Categoria: {jogo.categoria || "N/A"}</p>

                  <p>Quantidade: {jogo.quantidade || 0}</p>

                  <p>Desconto: {jogo.desconto ? jogo.desconto : 0}%</p>
                </div>
              ))}

              <br />

              <div className={styles.containerPag}>
                <h2 className={styles.totalLabel}>
                  Total do Pedido: R$ {totalCarrinho.toFixed(2)}
                </h2>

                <button className={styles.butao} onClick={pagar}>
                  Pagar
                </button>
              </div>
            </div>
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Carrinho;
