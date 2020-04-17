import React from 'react';


// css
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function About() {
    return (
        <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
                <Row className="justify-content-md-center">
                <h id="description-header">Game Description</h>
                </Row>
            </Col>
            <Col xs={3}></Col>
        </Row>
    ); }
    export default About;