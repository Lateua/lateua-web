import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import imagen from '../img/imagen.png';
import Image from 'react-bootstrap/Image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Home.css';

export const Home = () => {
    return (
        <div id="home">
        <Container fluid>
            <Row>
                <Col sm={12} md={4} lg={4} id="texto">
                    <h1>Bienvenid@ a  <br/>Lateua</h1>
                    <p>La Experiencia Definitiva De Diseño</p>
                </Col>
                <Col sm={12} md={2} lg={2} id="boton">
                    <Button variant="outline-secondary">Comenzar <FontAwesomeIcon icon="fa-solid fa-arrow-right"/></Button>
                </Col>
                <Col sm={12} md={6} lg={6} id="imagenCont">
                    <Image src={imagen} id='imagen'/>
                </Col>
            </Row>
        </Container>
        </div>
    );
};