import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ImgReview1 from '../assets/review1.jpg';
import ImgReview2 from '../assets/review2.jpg';
import ImgReview3 from '../assets/review3.jpg';
import ImgReview4 from '../assets/review4.jpg';

export default class Reviews extends Component {
    render() {
        return (
            <div>
                <div  className="container-components">
                    <h2 id="section4" className="text-center h-category">Отзывы</h2>
                </div>
                <div className="container-review">
                    <div className="carousel-review">
                        <Carousel>
                            <Carousel.Item>
                                <img 
                                    src={ ImgReview1 }
                                    height='400'
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img 
                                    src={ ImgReview2 }
                                    height='400'
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="carousel-review">
                        <Carousel>
                            <Carousel.Item>
                                <img 
                                    src={ ImgReview3 }
                                    height='400'
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img 
                                    src={ ImgReview4 }
                                    height='400'
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}