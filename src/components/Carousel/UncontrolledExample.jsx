import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as styles from './Style.module.css';

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.wccftech.com/wp-content/uploads/2025/04/Oblivion-Remastered-Key-Art-HD-scaled.jpeg"
                    alt="Primeiro slide"
                    width="10vw"
                    height="400vh"
                />
                <Carousel.Caption>
                    <h3 className={styles.h2}></h3>
                    
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://4kwallpapers.com/images/wallpapers/resident-evil-4-3840x2160-14534.jpeg"
                    alt="Segundo slide"
                    width="10vw"
                    height="400vh"
                />
                <Carousel.Caption>
                    <h3></h3>
                    
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.redd.it/rzd93vlpxn471.jpg"
                    alt="Terceiro slide"
                    width="10vw"
                    height="400vh"
                />
                <Carousel.Caption>
                    <h3></h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;