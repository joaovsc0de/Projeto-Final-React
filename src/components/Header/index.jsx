import { Link } from "react-router-dom";
import * as styles from"./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
         <div className="container">       
            <h1 className={styles.titulo}>Dragon Store</h1> 
                    
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/login"}>Login</Link>
                        </li>
                        {/* <li>
                            <Link to={"/loja"}>Carrinho</Link>
                     </li> */}
                      <li>
                            <Link to={"/more"}>Saiba mais</Link>
                     </li>
                        
                    </ul>
                </div> 
              
        </header>
  )
}

export default Header