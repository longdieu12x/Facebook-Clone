import "./Message.css";
import React from "react";

const Message = ({ own }) => {
	return (
		<div className={own ? "message own" : "message"}>
			<div className="messageTop">
				<img
					className="messageImg"
					src="http://localhost:8080/images/person/1.jpg"
					alt=""
				/>
				<p className="messageText">Hello this is a message</p>
			</div>
			<div className="messageBottom">1 hour ago</div>
		</div>
	);
};

export default Message;
