import React from "react";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "react-router-dom/Link";
import "../App.css";

function ErrorMessage(props) {
	const styleObj = {
		color: props.color
	}
     var errorMessages = props.messages.map((message) => <li>{message}</li>);

  return (
	<ul style={styleObj}>
		{errorMessages}
	</ul>);
}

export default ErrorMessage;
