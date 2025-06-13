import UncontrolledExample from "../../components/Carousel/UncontrolledExample"
import Header from "../../components/Header"
import * as styles from './Home.module.css'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <div className={styles.Header}>
            <Header />
            <UncontrolledExample />
            <Footer />

        </div>
    )
}

export default Home