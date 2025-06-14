import Header from "../../components/Header"
import * as styles from './Home.module.css'
import FooterMain from '../../components/FooterMain'
import CarouselFadeExample from "../../components/Carousel/CarouselFadeExample"

const Home = () => {
    return (
        <div className={styles.Header}>
            <Header />
            <CarouselFadeExample />
            <FooterMain />

        </div>
    )
}
// console.log("oi");
export default Home