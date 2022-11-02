import React, { useState } from 'react';

import  Form  from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../styles/Login.css';

export const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    const [validated1, setValidated1] = useState(false);

    const handleSubmit1 = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated1(true);
    };
    return(
        <div id="loginDiv">
        <Row xs={1} md={2} className="g-4">
            <Col>
                <Card id="loginCard">
                    <Card.Body>
                    <Card.Title>Acceso</Card.Title>
                    <Card.Text>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Introduce tu email" required />

                            </Form.Group>
                    
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Introduce tu contraseña" required/>
                                </Form.Group>

                            <Button variant="primary" type="submit">
                            Acceder
                            </Button>
                        </Form>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card id="registerCard">
                    <Card.Body>
                    <Card.Title>Registro</Card.Title>
                    <Card.Text>
                        <Form noValidate validated={validated1} onSubmit={handleSubmit1}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Introduce tu nombre completo" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Introduce tu email" required/>
                            </Form.Group>
                    
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Introduce tu contraseña" required/>
                                </Form.Group>
                            <Button variant="primary" type="submit">
                            Registrarse
                            </Button>
                        </Form>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </div> 
    )
}