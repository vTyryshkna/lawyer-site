import React, { Component } from "react";
import { Container, Card, CardBody, CardText } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default class Contscts extends Component {
    render() {
        return (
            <div>
                <div  className="container-components">
                    <h2 id="section6" className="text-center h-category">Контакты</h2>
                    <div>
                        <Container fluid>
                        <Row xs={2} md={3} className="g-4">
                            <Col xs>
                                <Card bg="none" border="secondary">
                                    <Card.Header>Адрес: 
                                        <CardText>г.Новосибирск</CardText>
                                    </Card.Header>
                                </Card>
                            </Col>
                            <Col xs>
                                <Card>
                                    <Card.Header>Контакты: 
                                        <CardText>+7-923-707-86-71; 
                                        +7-962-791-68-50
                                        </CardText>
                                    </Card.Header>
                                </Card>
                            </Col>
                            <Col xs>
                                <Card>
                                    <Card.Header>Email:
                                        <CardText>e.tyryschkina@yandex.ru</CardText>
                                    </Card.Header>
                                </Card>
                            </Col>
                        </Row>
                        {/* <div>
                            <a className="link-taplink" href="https://astraeansk.ru">
                                <svg className="icon-taplink" viewBox="0 0 48 48">
                                    <use href=""></use>
                                </svg>
                            </a>
                        </div> */}
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}