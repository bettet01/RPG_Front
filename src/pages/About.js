import React from 'react';


// css
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import '../App.css';

function About() {
    return (
        <Row>
            <Col xs={2}></Col>
            <Col xs={8}>
                <Row className="justify-content-md-center">
                <h id="description-header">Game Description</h>
                </Row>
                <Card>
                    <Card.Text id="card">The Dev10 game is an interactive experience...</Card.Text>
                </Card>
            </Col>
            <Col xs={2}></Col>
        </Row>
    ); }
    export default About;