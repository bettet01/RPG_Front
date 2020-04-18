import React from 'react';


// css
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';
import axios from 'axios';

function SignUp() {
  const [data, setData] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const changeUsername = (e) => {
    setData({...data, username: e.target.value});

    if(data.username.length <= 3){
      var x = document.getElementById("span-4-characters");
      x.style.color = "red";
    } else {
      var y = document.getElementById("span-4-characters");
      y.style.color = "green";
    }
  }

  const changeEmail = (e) => {
    setData({...data, email: e.target.value});
  }

  const changePassword = (e) => {
    setData({...data, password: e.target.value});
  }

  const changeConfirmPassword = (e) => {
    setData({...data, comfirmPassword: e.target.value});
  }

  const submitData = (e) => {
    axios.post({
      method: 'post',
      url: 'localhost:8080/users/user',
      data: {
        username: data.username,
        password: data.password,
        email: data.email
      }  
    }).then(() => {
      // do stuff
    }).catch(() => {
      // do something
    })
  } 

    return (
        <Row className="Row-2">
        <Col></Col>
        <Col xs={6}>
          <h1 id="sign-up-col">Sign Up</h1>
        <Form onSubmit={submitData}>
        <Form.Group id="form-group-username">
            <Form.Label id="label">
            Username</Form.Label>
            <Form.Control onChange={changeUsername} value={data.username} id="form-control-username" type="username" placeholder="Username" />
            <Form.Text id="form-text-username"> 
              <span id="span-4-characters"> 4 Characters Minimum</span> |
              <span id="span-no-special"> No Special Characters</span>
            </Form.Text>
          </Form.Group>
    
          <Form.Group id="form-group-email">
            <Form.Label id="label">Email address</Form.Label>
            <Form.Control onChange={changeEmail} value={data.email} id="form-control-email" placeholder="Email" />
          </Form.Group>
    
          <Form.Group id="form-group-password">
            <Form.Label id="label">
            Password</Form.Label>
            <Form.Control onChange={changePassword} value={data.password} id="form-control-password" type="password" placeholder="Password" />
            <Form.Text id="form-text-password">
              <span id="span-uppercase"> 1 Uppercase Letter</span> | 
              <span id="span-lowercase"> 1 Lowercase Letter</span> |
              <span id="span-number"> 1 Number</span> | 
              <span id="span-special"> 1 Special Character</span>
            </Form.Text>
          </Form.Group>
    
          <Form.Group id="form-group-password">
            <Form.Label id="label">
            Confirm Password</Form.Label>
            <Form.Control onChange={changeConfirmPassword} value={data.confirmPassword} id="form-control-password" type="password" placeholder="Confirm Password" />
            <Form.Text>Passwords Match</Form.Text>
          </Form.Group>
    
          <Row className="justify-content-md-center">
          <Button className="mx-auto" id="submit-button" variant="primary" type="submit">
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