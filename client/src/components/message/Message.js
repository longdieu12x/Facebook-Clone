import "./Message.css";
import React from "react";
import { format } from "timeago.js";
import { getUserDetail } from "src/services/user";
const Message = ({ own, message, currentTime, user_id }) => {
	return (
		<div className={own ? "message own" : "message"}>
			<div className="messageTop">
				<img
					className="messageImg"
					src={
						own
							? "https://i.picsum.photos/id/1033/2048/1365.jpg?hmac=zEuPfX7t6U866nzXjWF41bf-uxkKOnf1dDrHXmhcK-Q"
							: "https://i.picsum.photos/id/1043/5184/3456.jpg?hmac=wsz2e0aFKEI0ij7mauIr2nFz2pzC8xNlgDHWHYi9qbc"
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
