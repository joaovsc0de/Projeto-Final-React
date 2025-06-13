import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/1966480.jpg"
                    alt="Primeiro slide"
                    width="10vw"
                    height="400vh"
                />
                <Carousel.Caption>
                    <h3>Primeiro slide</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/821031.jpg"
                    alt="Segundo slide"
                    width="10vw"
                    height="400vh"
                />
                <Carousel.Caption>
                    <h3>Segundo slide</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/R.55fd90eca3d9fe3b12bc5fa2d785f183?rik=BAWl2Knpykws8w&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f08%2f4k-gaming-wallpaper-2.jpg&ehk=6m%2bFySq0BpkJQRQj1O%2bw4%2b5FE83LdoLCVb8C5Yr5ths%3d&risl=&pid=ImgRaw&r=0"
                    alt="Terceiro slide"
                    width="10vw"
                    height="400vh"
                />
                <Carousel.Caption>
                    <h3>Terceiro slide</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;