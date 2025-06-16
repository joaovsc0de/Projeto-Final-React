import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import * as styles from "./Style.module.css";

function CarouselFadeExample() {
  return (
    <Carousel fade className={styles.carouselfadeexample}>
      <Carousel.Item className={styles.carousel_img}>
        <img
          className={styles.carousel_img}
          src="https://xboxwire.thesourcemediaassets.com/sites/8/2025/04/Hero1_edited-f589f131b7c0dbe784a3-1900x1080.jpg"
          alt="A primeira foto do slide é sobre The Elder Scrolls IV: Oblivion"
        />
        <Carousel.Caption>
          <h3 className={styles.tituloimagens}>
            The Elder Scrolls IV: Oblivion
          </h3>
          <p className={styles.paragrafo}>
            The Elder Scrolls IV: Oblivion é um jogo eletrônico de RPG de ação
            desenvolvido pela Bethesda Game Studios para Microsoft Windows, Xbox
            360 e PlayStation 3
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={styles.carousel_img}
          src="https://w.wallhaven.cc/full/e7/wallhaven-e7gj78.png"
          alt="A segunda foto do slide é sobre Resident - Evil 4"
        />
        <Carousel.Caption>
          <h3 className={styles.tituloimagens}>Resident Evil 4</h3>
          <p className={styles.paragrafo}>
          Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo
            eletrônico de survival horror e tiro em terceira pessoa desenvolvido
            e publicado pela Capcom, lançado originalmente para o GameCube em
            2005. É o sexto jogo principal da franquia Resident Evil. A história
            segue o agente especial Leon S. Kennedy.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={styles.carousel_img}
          src="https://i.redd.it/rzd93vlpxn471.jpg"
          alt="A terceira foto do slide é sobre Elden Ring"
        />
        <Carousel.Caption>
          <h3 className={styles.tituloimagens}>Elden Ring</h3>
          <p className={styles.paragrafo}>
            Elden Ring é um jogo eletrônico de RPG de ação desenvolvido 
          pela FromSoftware e publicado pela Bandai Namco Entertainment, 
          lançado mundialmente em fevereiro de 2022 para PlayStation 4, PlayStation 5, 
          Xbox One, Xbox Series X/S e Microsoft Windows. Criado em colaboração com o autor 
          de fantasia George R. R. Martin, é ambientado nas Terras Intermédias e segue a 
          jornada de um Maculado.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={styles.carousel_img}
          src="https://w.wallhaven.cc/full/ym/wallhaven-ymgl3x.jpg"
          alt="A quarta foto do slide é sobre GTA V "
        />
        <Carousel.Caption>
          <h3 className={styles.h3}>Grand Theft Auto V</h3>
          <p className={styles.paragrafo}>
            Grand Theft Auto V é um jogo eletrônico de ação e aventura
            desenvolvido pela Rockstar North e publicado pela Rockstar Games.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={styles.carousel_img}
          src="https://w.wallhaven.cc/full/l8/wallhaven-l8963q.jpg"
          alt="A quinta foto do slide é sobre TEKKEN 8 "
        />
        <Carousel.Caption>
          <h3 className={styles.tituloimagens}>Tekken 8</h3>
          <p className={styles.paragrafo}>
            Tekken 8 é um jogo eletrônico de luta desenvolvido pela Bandai Namco
            Studios e Arika. Bandai Namco Entertainment publicou o jogo para
            PlayStation 5, Windows e Xbox Series X/S em 26 de janeiro de 2024.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselFadeExample;
