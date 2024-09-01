import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
/*import Image from 'react-bootstrap/Image';*/
import photo from "../assets/photo.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <div  className="container-components">
                    <h2 id="section2" className="text-center h-category">О нас</h2>
                </div>
                <div className="container-aboutMe">
                        <div className="aboutMe photo" data-bs-touch="false">
                            <Carousel bsPrefix="carousel-inner item">
                                <Carousel.Item bsPrefix="carousel-item">
                                    {/* <Image src={photo3} rounded className="card-img"></Image> */}
                                    <div className="card-img">
                                        <img 
                                            className="card-img"
                                            src={ photo3 }
                                            alt="photo3"
                                        />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item bsPrefix="carousel-item">
                                    {/* <Image src={photo} rounded className="card-img"></Image> */}
                                    <div className="card-img">
                                        <img 
                                            className="card-img"
                                            src={ photo }
                                            alt="photo"
                                        />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item bsPrefix="carousel-item">
                                    {/* <Image src={photo2} rounded className="card-img"></Image> */}
                                    <div className="card-img">
                                        <img 
                                            className="card-img"
                                            src={ photo2 }
                                            alt="photo2"
                                        />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <div className="card aboutMe text">
                                <p className="card-text">
                                    Мы, Елена и Александр - семья юристов. Имеем высшее юридическое образование, а также постоянно совершенствуем свою квалификацию.
                                </p>
                                <p className="card-text">
                                    Арбитражные споры, гражданские дела любой сложности, споры по семейному, жилищному, авторскому и наследственному праву, уголовные дела(на стороне потерпевшего) — это те направления специализации, в которых мы предлагаем вам юридическую помощь.
                                    Стаж в области юриспруденсии более 15 лет.
                                </p>
                                <p className="card-text">
                                    Данный род деятельности приносит нам большое удовлетворение, так как мы непосредственно оказываем помощь людям в трудных жизненных ситуациях. 
                                </p>
                                <p className="card-text">
                                    Добро пожаловать, мы рады Вас видеть у себя на странице и всегда готовы Вам помочь.
                                </p>
                            </div>
                        </div>
                </div >
            </div>
        )
    }
}