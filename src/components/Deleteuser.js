import React from "react";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function Deleteuser() {
  return (
    <div>
      <Table id="user-profile" variant="dark" bordered>
        <tbody>
          <tr>
            <td>Account Username</td>
            <td>Account Username Here</td>
          </tr>
          <tr>
            <td>Account Email</td>
            <td>Account Email Here</td>
          </tr>
          <tr>
            <td>Account Level</td>
            <td>Account Level Here</td>
          </tr>
          <tr>
            <td>Account Weapons</td>
            <td>Account Weapons Here</td>
          </tr>
        </tbody>
      </Table>
      <Row className="justify-content-md-center">
        <Button
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
