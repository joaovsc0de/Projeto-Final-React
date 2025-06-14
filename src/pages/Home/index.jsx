import Header from "../../components/Header";
import * as styles from "./Home.module.css";
import Footer from "../../components/Footer";
import CarouselFadeExample from "../../components/Carousel/CarouselFadeExample";

const Home = () => {
  return (
    <div className={styles.Header}>
      <Header />
      <CarouselFadeExample />
      <Footer />
    </div>
  );
};

export default Home;
