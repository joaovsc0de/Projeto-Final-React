import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import * as styles from "./Update.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useEffect, useContext } from "react"; 
import { AuthContext } from '../../contexts/AuthContext' 

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("O nome tem que ser preenchido")
    .max(40, "Tamanho máximo permitido"),
  telefone: yup
    .string()
    .required("O telefone tem que ser preenchido")
    .max(150, "Tamanho máximo permitido"),
  email: yup
    .string()
    .required("O email deve ser preenchido")
    .max(500, "Tamanho máximo permitido"),
  cpf: yup
    .string()
    .required("O CPF tem que ser preenchido")
    .max(500, "Tamanho máximo permitido"),
  senha: yup
    .string()
    .required("A senha tem que ser preenchida")
    .max(500, "Tamanho máximo permitido"),
  complemento: yup
    .string()
    .max(500, "Tamanho máximo permitido"),
  cep: yup
    .string()
    .required("O cep tem que ser preenchido")
    .max(500, "Tamanho máximo permitido"),
  url: yup
    .string()
    .max(500, "Tamanho máximo permitido"),
});

const Update = () => {
  let navigate = useNavigate();
  const { user, loading, updateUserContext  } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm({ resolver: yupResolver(validationPost) });

  useEffect(() => {
    if (!loading && user && user.id) {
      axios
        .get(`http://localhost:8080/clientes/listar/${user.id}`) 
        .then((response) => {
          reset(response.data); 
        })
        .catch((error) => {
          console.error("Erro ao carregar dados do cliente:", error);
        });
    }
  }, [user, loading, reset]);

  const addPost = (data) => {
    if (!user || !user.id) {
      console.error("Usuário não logado ou ID indisponível. Redirecionando para o login.");
      navigate('/login');
      return;
    }

     const { id, idPerfil, ...dataToSend } = data;
    axios
      .put(`http://localhost:8080/clientes/atualizar/${user.id}`, dataToSend) 
      .then((response) => {
        console.log("Atualização realizada com sucesso!");
        updateUserContext(response.data);
        navigate("/perfil");         
      })
      .catch((error) => {
        console.error("Erro ao atualizar:", error);
        console.error("Dados enviados:", dataToSend); 
      });
  };

  if (loading) {
    return <div>Carregando informações do usuário...</div>; 
  }

  if (!user) {
    return <div>Você precisa estar logado para acessar esta página.</div>; 
  }

  return (
    <div>
      <Header />
      <main>
        <div className={styles.cardPost}>
          <h1>Atualizar Perfil</h1>
          <hr />
          <div className={styles.cardBodyPost}>
            <form onSubmit={handleSubmit(addPost)}>
              <div className={styles.fields}>
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  {...register("nome")}
                />
                <p className={styles.errorMessage}>{errors.nome?.message}</p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="telefone">Telefone:</label>
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  {...register("telefone")}
                />
                <p className={styles.errorMessage}>
                  {errors.telefone?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  {...register("email")}
                />
                <p className={styles.errorMessage}>
                  {errors.email?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="cpf">CPF:</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  {...register("cpf")}
                />
                <p className={styles.errorMessage}>
                  {errors.cpf?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="senha">Senha:</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  {...register("senha")}
                />
                <p className={styles.errorMessage}>
                  {errors.senha?.message}
                </p>
              </div>

                <div className={styles.fields}>
                <label htmlFor="complemento">Complemento:</label>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  {...register("complemento")}
                />
                <p className={styles.errorMessage}>
                  {errors.complemento?.message}
                </p>
              </div>

                <div className={styles.fields}>
                <label htmlFor="cep">CEP:</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  {...register("cep")}
                />
                <p className={styles.errorMessage}>
                  {errors.cep?.message}
                </p>
              </div>

                <div className={styles.fields}>
                <label htmlFor="url">Url:</label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  {...register("url")}
                />
                <p className={styles.errorMessage}>
                  {errors.url?.message}
                </p>
              </div>
              
              <div className={styles.btnPost}>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <br />
      <Footer/>
    </div>
  );
};

export default Update;