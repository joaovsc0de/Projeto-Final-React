import Header from "../../components/Header"
import RecipeCarousel from '../../components/Recipes/RecipeCarousel'
import * as styles from './Home.module.css'
import FooterMain from '../../components/FooterMain'

const Home = () => {
  return (
    <div className={styles.Header}>
    <Header />
    <h1>oi</h1>
    {/* <RecipeCarousel /> */}
    <FooterMain/>
    </div>
  )
}

export default Home