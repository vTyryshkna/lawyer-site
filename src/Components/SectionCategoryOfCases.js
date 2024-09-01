import React, { Component } from "react";
import { Container, Card, CardBody, CardText } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class SectionCategoryOfCases extends Component {
    render() {
        return (
            <>
                <Container fluid className="container-components">
                    <h2 id="section1" className="text-center h-category">Направления и категория дел</h2>
                </Container>
                <Container fluid>
                <Row xs={1} md={2} className="g-4">
                    <Col xs>
                        <Card>
                            <Card.Header>Юридический консультант, поможет, если Вы нуждаетесь в:</Card.Header>
                            <CardBody>
                                <footer className="blockquote-footer">Консультационной работе</footer>
                                <footer className="blockquote-footer">Составлении правовых документов</footer>
                                <footer className="blockquote-footer">Анализе ситуации</footer>
                                <footer className="blockquote-footer">Определении стратегии ведения дела</footer>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs>
                        <Card>
                            <Card.Header>Профессиональный медиатор, поможет Вам в:</Card.Header>
                            <CardBody>
                                <footer className="blockquote-footer">Разрешении вашего спора в досудебном порядке в крaтчайшие сроки</footer>
                                <footer className="blockquote-footer">Составление претензий, писем и заявлений, досудебные встречи в личном офисе либо на территории контрагента</footer>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs>
                        <Card>
                            <Card.Header>Защита интересов в суде</Card.Header>
                            <CardBody>
                                <CardText>
                                Успешно представляем интересы своих клиентов в судах РФ всех юрисдикций: 
                                </CardText>
                                <footer className="blockquote-footer">Мировых</footer>
                                <footer className="blockquote-footer">Судах общей юрисдикции</footer>
                                <footer className="blockquote-footer">Арбитражных</footer>
                                <footer className="blockquote-footer">Судах Апелляционной, Кассационной и
    Надзорной инстанций</footer>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs>
                        <Card>
                            <Card.Header>Категории дел, за которые мы готовы взяться</Card.Header>
                            <CardBody>
                                <footer className="blockquote-footer">Трудовые споры</footer>
                                <footer className="blockquote-footer">Семейные споры</footer>
                                <footer className="blockquote-footer">Защита прав потребителей</footer>
                                <footer className="blockquote-footer">Земельные споры</footer>
                                <footer className="blockquote-footer">Жилищные споры</footer>
                                <footer className="blockquote-footer">Споры по ДТП</footer>
                                <footer className="blockquote-footer">Взыскание дебеторской задолженности, долгов по договорам и распискам</footer>
                                <footer className="blockquote-footer">Ведение исполнительного производства</footer>
                                <footer className="blockquote-footer">Договоры и соглашения</footer>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </>
        )
    }
}