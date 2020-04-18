import React from "react";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";

function SignUp() {
  return (
    <Row className="Row-2">
      <Col></Col>
      <Col xs={6}>
        <h1 id="sign-up-col">Sign Up</h1>
        <Form>
          <Form.Group id="form-group-username">
            <Form.Label id="label">Username</Form.Label>
            <Form.Control
              id="form-control-username"
              type="username"
              placeholder="Username"
            />
            <Form.Text id="form-text-username" className="form-text">
              <span id="span-4-characters"> 4 Characters Minimum</span> |
              <span id="span-no-special"> No Special Characters</span>
            </Form.Text>
          </Form.Group>

          <Form.Group id="form-group-email">
            <Form.Label id="label">Email address</Form.Label>
            <Form.Control id="form-control-email" placeholder="Email" />
          </Form.Group>

          <Form.Group id="form-group-password">
            <Form.Label id="label">Password</Form.Label>
            <Form.Control
              id="form-control-password"
              type="password"
              placeholder="Password"
            />
            <Form.Text id="form-text-password" className="form-text">
              <span id="span-uppercase"> 1 Uppercase Letter</span> |
              <span id="span-lowercase"> 1 Lowercase Letter</span> |
              <span id="span-number"> 1 Number</span> |
              <span id="span-special"> 1 Special Character</span>
            </Form.Text>
          </Form.Group>

          <Form.Group id="form-group-password">
            <Form.Label id="label">Confirm Password</Form.Label>
            <Form.Control
              id="form-control-password"
              type="password"
              placeholder="Confirm Password"
            />
            <Form.Text className="form-text">
              <span id="span-passwords-match">Passwords Match</span>
            </Form.Text>
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
      <Col></Col>
    </Row>
  );
}

export default SignUp;
