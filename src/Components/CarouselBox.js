import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import lawImg from "../assets/gabrielle-henderson.jpg";
import dlawImg from "../assets/pexels-pavel-danilyuk-8112168.jpg";
import { Button } from "react-bootstrap";

export default class CarouselBox extends Component {
    render() {
        return (
            <>
                <Carousel>
                    <Carousel.Item className="carousel-item">
                        <div className="bg-img">
                            <img 
                                className="d-block w-100"
                                src={ lawImg }
                                alt="Law"
                                height='650'
                            />
                        </div>
                        <Carousel.Caption className="carousel-item">
                            <h2 className="text-center h2-carousel">Юристы, с большим опытом</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <div className="bg-img">
                            <img 
                                className="d-block w-100"
                                src={ dlawImg }
                                alt="Law"
                                height='650'
                            />
                        </div>
                        <Carousel.Caption className="carousel-item">
                            <h2 className="text-center  h2-carousel">Юристы, которых рекомендуют</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}