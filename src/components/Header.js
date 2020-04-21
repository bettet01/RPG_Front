import React from 'react';


// css
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'react-router-dom/Link';
import '../App.css';

function Header() {
    return (
        <Row>
        <Col lg={3} md={3} xs={3} id="dev-10">
            <Link id="link" to="/">Dev10 Game</Link>
        </Col>
        
    <Col lg={5} md={1} xs={1}> </Col>
       
        <Col lg={1} md={2} xs={2} id="header-link">
            <Link id="link" to="/about">About</Link>
        </Col>

        <Col lg={1} md={2} xs={2} id="header-link">
            <Link id="link" to="/play">Play</Link>
        </Col>

        <Col lg={1} md={2} xs={2} id="header-link">
            <Link id="link" to="/signup">Sign Up</Link>
        </Col>

        <Col lg={1} md={2} xs={2} id="header-link">
            <Link id="link" to="/login">Log In</Link>
        </Col>

      </Row>
    );
}

    export default Header;