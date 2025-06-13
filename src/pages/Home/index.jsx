

import UncontrolledExample from "../../components/Carousel/UncontrolledExample"
import Header from "../../components/Header"
import * as styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.Header}>
    <Header />
    <UncontrolledExample/>
    </div>
  )
}

export default Home