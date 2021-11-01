import "./ChatOnline.css";
import React, { useEffect, useState } from "react";
import { getUserDetail } from "src/services/user";
const ChatOnline = ({ currentUserId, onlineUserId, conversationHandler }) => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		if (onlineUserId !== currentUserId) {
			getUserDetail(onlineUserId, (res) => {
				setUser(res);
			});
		}
	}, []);
	const conversationProcess = () => {
		conversationHandler(onlineUserId);
	};
	return (
		<>
			{user ? (
				<>
					<div className="chatOnline" onClick={() => conversationProcess()}>
						<div className="chatOnlineFriend">
							<div className="chatOnlineImgContainer">
								<img
									className="chatOnlineImg"
									src={
										user.profilePicture
											? process.env.REACT_APP_PUBLIC_FOLDER +
											  user.profilePicture
											: process.env.REACT_APP_PUBLIC_FOLDER +
											  "person/noAvatar.png"
									}
									alt=""
								/>
								<div className="chatOnlineBadge"></div>
							</div>
							<span className="chatOnlineName">{user?.username}</span>
						</div>
					</div>
				</>
			) : (
				""
			)}
		</>
	);
};
export default ChatOnline;
