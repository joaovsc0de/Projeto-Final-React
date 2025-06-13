import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import * as styles from "./Posts.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationPost = yup.object().shape({
  nome: yup
    .string()
    .required("O nome tem que ser preenchido")
    .max(40, "Tamanho máximo permitido"),
  valor: yup
    .number()
    .required("O valor tem que ser preenchido")
    .typeError("O valor deve ser um número")
    .max(150, "Tamanho máximo permitido"),
  categoria: yup.object().shape({
    id: yup
      .number()
      .required("O ID da categoria tem que ser preenchido")
      .typeError("O ID da categoria deve ser um número")
  }).required("A categoria é obrigatória"),
    plataforma: yup
    .string()
    .required("A plataforma tem que ser preenchida")
    .max(500, "Tamanho máximo permitido"),
    url: yup
    .string()
    .required("A url tem que ser preenchida")
    .max(500, "Tamanho máximo permitido"),
});

const Posts = () => {
   let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) =>
    axios
      .post("http://localhost:8080/produtos/inserir", data)
      .then(() => {
        navigate("/loja");
        console.log("deu certo");     
      })
      .catch(() => console.error("Deu errado"));

  return (
    <div>
      <Header />
      <main>
        <div className={styles.cardPost}>
          <h1>Inserir Jogo</h1>
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
                <label htmlFor="valor">Valor:</label>
                <input
                  type="number"
                  id="valor"
                  name="valor"
                  {...register("valor")}
                />
                <p className={styles.errorMessage}>
                  {errors.valor?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="categoria">ID da Categoria:</label>
                <input
                  type="number"
                  id="categoria"
                  name="categoria.id"
                  {...register("categoria.id")}
                />
                <p className={styles.errorMessage}>
                  {errors.categoria?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="plataforma">Plataforma:</label>
                <input
                  type="text"
                  id="plataforma"
                  name="plataforma"
                  {...register("plataforma")}
                />
                <p className={styles.errorMessage}>
                  {errors.plataforma?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="plataforma">Url:</label>
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
    </div>
  );
}

export default Posts
