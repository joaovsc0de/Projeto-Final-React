import * as styles from './Home.module.css'
import Footer from  '../../components/Footer'
import CarouselFadeExample from "../../components/Carousel/CarouselFadeExample"
import Header from "../../components/Header";
 import FooterMain from "../../components/FooterMain";


const Home = () => {
    return (
        <div className={styles.Header}>
            <Header />
            <CarouselFadeExample />
            <FooterMain />

        </div>
    )
}

export default Home;
