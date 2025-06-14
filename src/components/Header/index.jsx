
import { Link } from "react-router-dom";
import img from'../../assets/pngegg.png';
import styles from "./Header.module.css";
import DarkMode from "../DarkMode/DarkMode";

export default function Header() {
    return (
        <header>
            <div className={styles["logo-container"]}>
            <img src={img} alt="deu ruim" />
            <h2>Dragon Store </h2>
            {/* console.log("oi"); */}
            </div>

            <div className={styles["menu"]}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/perfil">Perfil</Link>
                        </li>
                        <li>
                            <Link to="/loja">Produtos</Link>
                        </li>
                        <li>
                            <Link to="/posts">Inserir</Link>
                        </li>     
                        <DarkMode />              
                    </ul>
                </nav>
            </div>
        </header>
    )
}