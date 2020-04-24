import React from "react";
import axios from "axios";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function Deleteuser(props) {
  const testFunction = (e) => {
    e.preventDefault();
    axios
      .delete("http://localhost:8080/api/users/" + props.data.id)
      .then(() => {
        props.setData({...props.data, isAuthenticated: false});
      });
  };

  return (
    <div>
      <Table id="user-profile" variant="dark" bordered>
        <tbody>
          <tr>
            <td>Account Username</td>
            <td>{props.data.player.charactername}</td>
          </tr>
          <tr>
            <td>Account Email</td>
            <td>{props.data.email}</td>
          </tr>
          <tr>
            <td>Account Level</td>
            <td>{props.data.player.playerlevel}</td>
          </tr>
          <tr>
            <td>Character Coins</td>
            <td>{props.data.player.coins}</td>
          </tr>
        </tbody>
      </Table>
      <Row className="justify-content-md-center">
        <Button
          onClick={testFunction}
          className="mx-auto"
          id="submit-button"
          variant="danger"
          type="submit"
        >
          Delete Account
        </Button>
      </Row>
    </div>
  );
}

export default Deleteuser;
