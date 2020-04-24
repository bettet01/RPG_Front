import React from "react";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../App.css";

function About() {
  return (
    <Row>
      <Col xs={1} lg={2}></Col>
      <Col xs={12} lg={8}>
        <Row className="justify-content-md-center">
          <h3 id="description-header">Game Description</h3>
        </Row>
        <Card id="card">
          <Card.Text id="card-text">
            The Dev10 game is a fun interactive experience that I developed and refined over the past two weeks. The user starts off with only a sword to protect themselves, but as they defeat more foes they acquire new equipment and gradually level up. The equipment includes weapons such as maces and swords and potions that allow you to restore your health. Your foes are skeletons and they usually attack you one at a time. However, if you are so unlucky, they will come at you in packs. The objective of the game is to become as OP as possible.
          </Card.Text>
        </Card>
      </Col>
      <Col xs={1} lg={2}></Col>
    </Row>
  );
}
export default About;
