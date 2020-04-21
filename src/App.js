import React from "react";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import About from "./pages/About";
import Play from "./pages/Play";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
