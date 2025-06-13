import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Recipe.module.css'; 
import axios from "axios";

const RecipeCard = ({ nome, valor, genero, url }) => {
  const handleComprar = () => {
    alert(`Comprar: ${nome}`);
  };

  const handleVerMais = () => {
    alert(`Ver Mais sobre: ${nome}`);
  };

  return (
    <div className="col-md-4 mb-1" style={{padding: '20px'}}>
      <div className="card p-4 text-center" style={{maxHeight:'60rem' /*backgroundColor:"rgb(161, 13, 13"}*/}}>
        {url && (
          <img
            src={url}
            className="card-img-top mb-3 d-block mx-auto" 
            alt={nome}
            style={{ borderRadius: "10px", maxHeight: "25rem", objectFit: "contain" }} 
          />
        )}
        <div className="card-body" >
          <h5 className="card-title" style={{maxHeight:'1rem'}}>{nome}</h5>
          <br />
          <p>Categoria: {genero}</p>
          <p className="card-text">Preço: R$ {valor}</p>
          <button className="btn btn-danger me-2" onClick={handleComprar}>
            Comprar
          </button>
          <button className="btn btn-primary" onClick={handleVerMais}>
            Ver Mais
          </button>
        </div>
      </div>
    </div>
  );
};

const RecipeCarousel = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
     axios.get("http://localhost:8080/produtos/listar")
        .then((response) => {
          setJogos(response.data);
        }).catch((error) => {
            console.error("Erro ao buscar jogos: ", error)
        })
  }, []); 

   return (
    <div className="container-fluid"> 
      <div className="row" id="recipe-carousel">
        {jogos.map((jogo) => (
          <RecipeCard 
            key={jogo.id || jogo.nome} 
            url={jogo.url}
            nome={jogo.nome} 
            genero={jogo.categoria}
            valor={jogo.valor} 
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeCarousel; 