import React from "react";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function ErrorMessage(props) {
     var errorMessages = props.messages.map((message) => <li>{message}</li>);

  return (
	<ul style={{"color": "red"}}>
		{errorMessages}
	</ul>);
}

export default ErrorMessage;
