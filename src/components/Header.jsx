import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../img/logoinv.png";
import '../styles/Header.css';

export const Header = () => {
    return (
        <div id="header">
        
            <Navbar expand="lg" fixed="top" id="header">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        src={logo}
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                        alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href="/access">Acceso</Nav.Link>
                            <Nav.Link href="/team">Equipo</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </div>
    );
};