

import UncontrolledExample from "../../components/Carousel/UncontrolledExample"


import UncontrolledExample from "../../components/Carousel/UncontrolledExample"
import Header from "../../components/Header"
import * as styles from './Home.module.css'
import FooterMain from '../../components/FooterMain'

const Home = () => {
  return (
    <div className={styles.Header}>
    <Header />
    <h1>oi</h1>
    {/* <RecipeCarousel /> */}
    <UncontrolledExample/>
    <FooterMain/>
>>>>>>> main
    </div>
  )
}

export default Home