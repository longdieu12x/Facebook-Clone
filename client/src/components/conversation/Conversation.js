import React from "react";
import "./Conversation.css";

const Conversation = ({ friend, conversationHandler }) => {
	const makeConversation = () => {
		conversationHandler(friend._id);
	};
	return (
		<div className="conversation" onClick={makeConversation}>
			{friend && (
				<>
					<img
						src={
							friend.profilePicture
								? process.env.REACT_APP_PUBLIC_FOLDER + friend.profilePicture
								: process.env.REACT_APP_PUBLIC_FOLDER + "person/noAvatar.png"
						}
						alt=""
						className="conversationImg"
					/>
					<span className="conversationName">{friend.username}</span>
				</>
			)}
		</div>
	);
};
export default Conversation;
