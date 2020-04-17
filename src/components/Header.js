import React from 'react';


// css
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Header() {
    return (
        <Row>
        <Col xs={3} id="dev-10">
            <a id="link" href="/">Dev10 Game</a>
        </Col>
        
        <Col xs={6}></Col>
        
        <Col xs={1} id="header-link">
            <a id="link" href="/login">Log In</a>
        </Col>
        
        <Col xs={1} id="header-link">
            <a id="link" href="/signup">Sign Up</a>
        </Col>
       
        <Col xs={1} id="header-link">
            <a id="link" href="/about">About</a>
        </Col>
      </Row>
    );
}

    export default Header;