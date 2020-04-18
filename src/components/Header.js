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
        <Col xs={3} id="dev-10">
            <Link id="link" to="/">Dev10 Game</Link>
        </Col>
        
        <Col xs={6}></Col>
        
        <Col xs={1} id="header-link">
            <Link id="link" to="/signup">Sign Up</Link>
        </Col>
       
        <Col xs={1} id="header-link">
            <Link id="link" to="/about">About</Link>
        </Col>

        <Col xs={1} id="header-link">
            <Link id="link" to="/play">Play</Link>
        </Col>

      </Row>
    );
}

    export default Header;