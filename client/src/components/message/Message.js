import "./Message.css";
import React, { useState, useEffect } from "react";
import { format } from "timeago.js";
import { getUserDetail } from "src/services/user";
const Message = ({ own, message, currentTime, user_id }) => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		getUserDetail(user_id, (res) => {
			setUser(res);
		});
	}, []);
	return (
		<div className={own ? "message own" : "message"}>
			<div className="messageTop">
				<img
					className="messageImg"
					src={
						user?.profilePicture
							? process.env.REACT_APP_PUBLIC_FOLDER + user.profilePicture
							: process.env.REACT_APP_PUBLIC_FOLDER + "person/noAvatar.png"
					}
					alt=""
				/>
				<p className="messageText">{message}</p>
			</div>
			<div className="messageBottom">{format(currentTime)}</div>
		</div>
	);
};

export default Message;
