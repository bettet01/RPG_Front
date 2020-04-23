import React, { Fragment } from "react";
import axios from "axios";

import ErrorMessage from "../components/ErrorMessage";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";

function Login(props) {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    color: "red",
    error: [],
  });

  const changePassword = (e) => {
    setLoginData({ ...loginData, password: e.target.value });
  };

  const changeEmail = (e) => {
    setLoginData({ ...loginData, email: e.target.value });
  };

  const getUser = (e) => {
    e.preventDefault();
    setErrors({...errors, error: []});
    axios
      .get(
        "http://localhost:8080/api/users/user?email=" +
          loginData.email +
          "&password=" +
          loginData.password
      )
      .then((res) => {
        console.log(res);
        props.setData({
          ...props.data,
          isAuthenticated: true,
          email: res.data.email,
          id: res.data.id,
          player: {
            charactername: res.data.player.charactername,
            coins: res.data.player.coins,
            currentexp: res.data.player.currentexp,
            currenthealth: res.data.player.currenthealth,
            currentmana: res.data.player.currentmana,
            defense: res.data.player.defense,
            dexterity: res.data.player.dexterity,
            equipmentitems: res.data.player.equipmentitems,
            intelligence: res.data.player.intelligence,
            inventoryitems: res.data.player.inventoryitems,
            maxexp: res.data.player.maxexp,
            maxhealth: res.data.player.maxexp,
            maxmana: res.data.player.maxmana,
            playerlevel: res.data.player.playerlevel,
            strength: res.data.player.strength,
          },
        });
      })
      .catch((err) => { 
        setErrors({...errors, error: ["Incorrect email or password"]});
      });
  };

  return (
    <Fragment>
      <ErrorMessage messages={errors.error} color={errors.color} />
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <h1 id="sign-up-col">Log In</h1>
          <Form>
            <Form.Group id="form-group-email">
              <Form.Label id="label">Email Address</Form.Label>
              <Form.Control
                onChange={changeEmail}
                val={loginData.email}
                id="form-control-email"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group id="form-group-password">
              <Form.Label id="label">Password</Form.Label>
              <Form.Control
                onChange={changePassword}
                val={loginData.password}
                id="form-control-password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Row className="justify-content-md-center">
              <Button
                onClick={getUser}
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
    </Fragment>
  );
}

export default Login;
