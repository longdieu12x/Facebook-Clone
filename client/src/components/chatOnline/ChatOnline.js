import "./ChatOnline.css";
import React from "react";

const ChatOnline = () => {
	return (
		<div className="chatOnline">
			<div className="chatOnlineFriend">
				<div className="chatOnlineImgContainer">
					<img
						className="chatOnlineImg"
						src="http://localhost:8080/images/person/2.jpg"
						alt=""
					/>
					<div className="chatOnlineBadge"></div>
				</div>
				<span className="chatOnlineName">Khue Dinh</span>
			</div>
		</div>
	);
};
export default ChatOnline;
