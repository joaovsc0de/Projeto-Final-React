import { Link } from "react-router-dom";
import img from '../../assets/pngegg.png';
import styles from "./Header.module.css";
import DarkMode from "../DarkMode/DarkMode";
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from "react";

export default function Header() {
 const { logout } = useContext(AuthContext); 
 const {user} = useContext(AuthContext)
    const handleLogout = (e) => {
        logout();
    }
   
    return (
        <header className={styles.header}> 
            <div className={styles["logo-container"]}>
                <Link to="/">
                <img src={img} alt="deu ruim" />
                </Link>        
            <h2>Dragon Store </h2>
            </div>

      <div className={styles["menu"]}>
        <nav>
            {/* {user && <h1>oi {user.nome}</h1>} */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

                       {!user && <li>
                            <Link to="/login">Login</Link>
                        </li>}
                        {user && <li>
                            <Link to="/perfil">Perfil</Link>
                        </li>}
                        <li>
                            <Link to="/loja">Produtos</Link>
                        </li>
                        {user && user.Perfil==2 && <li>
                            <Link to="/carrinho">Carrinho</Link>
                        </li>}
                        {user && user.idPerfil!==2 &&<li>
                            <Link to="/posts">Inserir</Link>
                        </li>}
                        {user && <li>
                            <Link to="/login" onClick={handleLogout}>Sair</Link>
                        </li>} 
                          
                        <DarkMode />          
                    </ul>
                </nav>
            </div>
        </header>
    )
}
