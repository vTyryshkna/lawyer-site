import React, { Component } from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from './logo_main.png';
import Category from './SectionCategoryOfCases.js';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar className="menu" collapseOnSelect expand="md" fixed="top">
                    <Container >
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height='45'
                                className="d-inline-blok align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/" className="linkColor">Главная</Nav.Link>
                                <Nav.Link href="#section1" className="linkColor">Категория дел</Nav.Link>
                                <Nav.Link href="#section2" className="linkColor">О нас</Nav.Link>
                                <Nav.Link href="#section3" className="linkColor">Цены</Nav.Link>
                                <Nav.Link href="#section4" className="linkColor">Отзывы</Nav.Link>
                                <Nav.Link href="#section5" className="linkColor">Практика</Nav.Link>
                                <Nav.Link href="#section6" className="linkColor">Контакты</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}