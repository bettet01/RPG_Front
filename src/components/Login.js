import React from "react";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";

function Login() {
  return (
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
        <h1 id="sign-up-col">Log In</h1>
          <Form>
            <Form.Group id="form-group-email">
              <Form.Label id="label">Email Address</Form.Label>
              <Form.Control
                id="form-control-email"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group id="form-group-password">
              <Form.Label id="label">Password</Form.Label>
              <Form.Control
                id="form-control-password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Row className="justify-content-md-center">
              <Button
                className="mx-auto"
                id="submit-button"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Col>
        <Col lg={3}></Col>
      </Row>
  );
}

export default Login;
