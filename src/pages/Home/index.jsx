import UncontrolledExample from "../../components/Carousel/UncontrolledExample"
import Header from "../../components/Header"
import * as styles from './Home.module.css'
import FooterMain from '../../components/FooterMain'

const Home = () => {
    return (
        <div className={styles.Header}>
            <Header />
            <UncontrolledExample />
            <FooterMain />
        </div>
    )
}

export default Home;
