import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import * as styles from "./Cadastro.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

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
    .required("A plataforma tem que ser preenchida")
    .max(500, "Tamanho máximo permitido"),
  senha: yup
    .string()
    .required("A senha tem que ser preenchida")
    .max(500, "Tamanho máximo permitido"),
  complemento: yup.string().max(500, "Tamanho máximo permitido"),
  cep: yup
    .string()
    .required("O cep tem que ser preenchido")
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
      .post("http://localhost:8080/clientes/inserir", data)
      .then(() => {
        navigate("/loja");
        console.log("deu certo");
      })
      .catch(() => console.error(data));

  return (
    <div>
      <Header />
      <main>
        <div className={styles.cardPost}>
          <h1>Cadastrar</h1>
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
                <p className={styles.errorMessage}>{errors.email?.message}</p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" {...register("cpf")} />
                <p className={styles.errorMessage}>{errors.cpf?.message}</p>
              </div>

              <div className={styles.fields}>
                <label htmlFor="senha">Senha:</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  {...register("senha")}
                />
                <p className={styles.errorMessage}>{errors.senha?.message}</p>
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
                <input type="text" id="cep" name="cep" {...register("cep")} />
                <p className={styles.errorMessage}>{errors.cep?.message}</p>
              </div>

              <div className={styles.btnPost}>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <br />
      <Footer />
    </div>
  );
};

export default Posts;
