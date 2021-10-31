import "./ChatOnline.css";
import React, { useCallback, useState } from "react";
import { getUserDetail } from "src/services/user";
import {
	getSpecialConversation,
	createConversation,
} from "src/services/conversation";
import { getAllConversations } from "src/actions/conversation";
import { useDispatch } from "react-redux";
const ChatOnline = ({ currentUserId, onlineUsers }) => {
	return (
		<>
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
		</>
	);
};
export default ChatOnline;
