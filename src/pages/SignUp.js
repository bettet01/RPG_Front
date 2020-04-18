import React from "react";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";
import axios from "axios";

function SignUp() {
  const [data, setData] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  React.useEffect(() => {
    // get color fields
    var passwordMatchCheck = document.getElementById("span-passwords-match");
    var characterCheck = document.getElementById("span-4-characters");
    var passwordUpperCheck = document.getElementById("span-uppercase");
    var passwordLowerCheck = document.getElementById("span-lowercase");
    var passwordNumberCheck = document.getElementById("span-number");
    var passwordSpecialCheck = document.getElementById("span-special");

    if (data.username.length < 4 || data.username.length > 16) {
      characterCheck.style.color = "red";
    } else {
      characterCheck.style.color = "green";
    }

    if (/[^a-zA-Z0-9]/.test(data.username)) {
      var z = document.getElementById("span-no-special");
      z.style.color = "red";
    } else {
      var special = document.getElementById("span-no-special");
      special.style.color = "green";
    }

    if (/[A-Z]/.test(data.password)) {
      passwordUpperCheck.style.color = "green";
    } else {
      passwordUpperCheck.style.color = "red";
    }

    if (/[a-z]/.test(data.password)) {
      passwordLowerCheck.style.color = "green";
    } else {
      passwordLowerCheck.style.color = "red";
    }

    if (/[0-9]/.test(data.password)) {
      passwordNumberCheck.style.color = "green";
    } else {
      passwordNumberCheck.style.color = "red";
    }

    if (/[!-*]/.test(data.password)) {
      passwordSpecialCheck.style.color = "green";
    } else {
      passwordSpecialCheck.style.color = "red";
    }

    // test password match
    if (data.password === data.confirmPassword) {
      passwordMatchCheck.style.color = "green";
    } else {
      passwordMatchCheck.style.color = "red";
    }
  });

  const changeUsername = (e) => {
    setData({ ...data, username: e.target.value });
  };

  const changeEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const changePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const changeConfirmPassword = (e) => {
    setData({ ...data, confirmPassword: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();

    if (data.username < 4 || data.username < 16) {
      //TODO: Add error messages
      console.log("username error");
      return;
    } else if (data.confirmPassword !== data.password) {
            //TODO: Add error messages
            console.log("passwords don't match");
      return;
    } else if (!/[A-Z]/.test(data.password)) {
      //TODO: Add error messages
      console.log("no upper case");
      return;
    } else if (!/[a-z]/.test(data.password)) {
            //TODO: Add error messages
            console.log("no lower case");
            return;
    } else if (!/[0-9]/.test(data.password)) {
            //TODO: Add error messages
            console.log("no number");
            return;
    } else if (!/[!-*]/.test(data.password)) {
            //TODO: Add error messages
            console.log("no special character");
            return;
    } else {
      axios
        .post("http://localhost:8080/api/users", {
          username: data.username,
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Row className="Row-2">
      <Col></Col>
      <Col xs={6}>
        <h1 id="sign-up-col">Sign Up</h1>
        <Form>
          <Form.Group id="form-group-username">
            <Form.Label id="label">Username</Form.Label>
            <Form.Control
              onChange={changeUsername}
              value={data.username}
              id="form-control-username"
              type="username"
              placeholder="Username"
            />
            <Form.Text id="form-text-username">
              <span id="span-4-characters"> 4-16 Characters</span> |
              <span id="span-no-special"> No Special Characters</span>
            </Form.Text>
          </Form.Group>

          <Form.Group id="form-group-email">
            <Form.Label id="label">Email address</Form.Label>
            <Form.Control
              onChange={changeEmail}
              value={data.email}
              id="form-control-email"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group id="form-group-password">
            <Form.Label id="label">Password</Form.Label>
            <Form.Control
              onChange={changePassword}
              value={data.password}
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
              onChange={changeConfirmPassword}
              value={data.confirmPassword}
              id="form-control--confirm-password"
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
              onClick={submitData}
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
