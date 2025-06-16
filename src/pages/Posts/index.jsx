import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import * as styles from "./Posts.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FooterMain from "../../components/FooterMain";
import Footer from "../../components/Footer";
import { BsDisplay } from "react-icons/bs";

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
  categoria: yup
    .object()
    .shape({
      id: yup
        .number()
        .required("O ID da categoria tem que ser preenchido")
        .typeError("O ID da categoria deve ser um número"),
    })
    .required("A categoria é obrigatória"),
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
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <div className={styles.cardPost}>
          <img
            src="src/assets/pngegg.png"
            alt="Dragon Store Logo"
            className={styles.logoImage}
          />
          <h1 className={styles.title}>Dragon Store</h1>
          <hr />

          <div className={styles.cardBodyPost}>
            <form onSubmit={handleSubmit(addPost)}>
              <div className={styles.fields}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" {...register("nome")} />
                <p className={styles.errorMessage}>{errors.nome?.message}</p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="valor">Valor:</label>
                <input type="number" id="valor" {...register("valor")} />
                <p className={styles.errorMessage}>{errors.valor?.message}</p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="categoria">ID da Categoria:</label>
                <input
                  type="number"
                  id="categoria"
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
                  {...register("plataforma")}
                />
                <p className={styles.errorMessage}>
                  {errors.plataforma?.message}
                </p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="url">Url:</label>
                <input type="text" id="url" {...register("url")} />
                <p className={styles.errorMessage}>{errors.url?.message}</p>
              </div>

        <div className={styles.btnPost}>
          <button type="submit">ENVIAR</button>
        </div>
      </form>
    </div>
  </div>
</div>
      <Footer/>
    </div>
  );
};

export default Posts;
