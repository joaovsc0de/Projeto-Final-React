import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Recipe.module.css'; 
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const RecipeCard = ({ nome, valor, genero, url, id, deletePost }) => {
  const { user } = useContext(AuthContext);
  const handleComprar = () => {
    alert("Faça login para comprar!");
  };
  return (
    <div className="col-md-4 mb-4" style={{ padding: "1rem" }}>
      <div
        className="card p-4 text-center"
        style={{
          backgroundColor: "#131416", // Fundo escuro (#131416)
          color: "#fff", 
          borderRadius: "15px", 
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", 
        }}
      >
        {url && (
          <img
            src={url}
            className="card-img-top mb-3 d-block mx-auto"
            alt={nome}
            style={{
              borderRadius: "10px",
              maxHeight: "25rem",
              objectFit: "contain",
            }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{nome}</h5>
          <p style={{ margin: "5px 0" }}>Categoria: {genero}</p>
          <p style={{ margin: "5px 0" }}>Preço: R$ {valor}</p>
        </div>
        <div className="d-flex justify-content-center mt-3 mb-2">
          <Link to="/login">
          <button className="btn btn-success me-2" onClick={handleComprar}>
            Comprar
          </button>
          </Link>

        
         {user && user.idPerfil !==2 && <button className="btn btn-danger" onClick={() =>{
            console.log(nome);
            deletePost(parseInt(id))}
          } >
            Excluir
          </button>}
          
        </div>
      </div>
    </div>
  );
};

const RecipeCarousel = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/produtos/listar")
      .then((response) => {
        setJogos(response.data);
        console.log(jogos.map((jogo)=> console.log(jogo.id)));
        
      })
      .catch((error) => {
        console.error("Erro ao buscar jogos: ", error);
      });
  }, []);
   
  const deletePoste = (id) => {
    axios
      .delete(`http://localhost:8080/produtos/deletar/${id}`)
      .then(() => {
        console.log("Apagado com sucesso");
        
        setJogos(jogos.filter((jogo) => jogo.id !== id));
      })
      .catch(() => {
        console.error("Não encontrado.");
      });
  };
  
  return (
    <div className="container-fluid" style={{ padding: "2rem", background: "linear-gradient(to bottom, #4b0000, #000)" }}>
      <div className="row justify-content-center" style={{ gap: "2rem" }}>
        {jogos.map((jogo) => (
          <RecipeCard 
            key={jogo.id || jogo.nome} 
            url={jogo.url}
            nome={jogo.nome} 
            genero={jogo.categoria}
            valor={jogo.valor} 
            id={jogo.id}
            deletePost={deletePoste}     
          />
          
        ))}
      </div>
    </div>
  );
}
export default RecipeCarousel;