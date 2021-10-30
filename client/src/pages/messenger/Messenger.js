import "./Messenger.css";
import React, { useEffect, useRef, useState } from "react";
import Topbar from "src/components/Topbar/Topbar";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Conversation from "src/components/conversation/Conversation";
import Message from "src/components/message/Message";
import ChatOnline from "src/components/chatOnline/ChatOnline";
import { v4 as uuidv4 } from "uuid";

const Messenger = () => {
	const messageEl = useRef(null);
	const [messages, setMessages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const user = useSelector((state) => state.user);
	const friends = useSelector((state) => state.friends);
	useEffect(() => {
		if (Object.keys(user.data).length !== 0) {
			messageEl.current.addEventListener("DOMNodeInserted", (event) => {
				const { currentTarget: target } = event;
				target.scroll({ top: target.scrollHeight, behavior: "smooth" });
			});
		}
	}, []);
	if (Object.keys(user.data).length === 0) {
		return <Redirect to="/login" />;
	}
	return (
		<React.Fragment>
			<Topbar />
			<div className="messenger">
				<div className="chatMenu">
					<div className="chatMenuWrapper">
						<input
							type="text"
							placeholder="Search for friends"
							className="chatMenuInput"
						/>
						{friends &&
							friends.data.map((friend) => <Conversation friend={friend} />)}
					</div>
				</div>
				<div className="chatBox">
					<div className="chatboxWrapper">
						<div className="chatBoxTop" ref={messageEl}>
							{messages.map((item) => (
								<Message key={uuidv4()} />
							))}
							<Message own />
						</div>
						<div className="chatBoxBottom">
							<textarea
								placeholder="Write something..."
								name=""
								id=""
								cols="30"
								rows="10"
								className="chatMessageInput"
							></textarea>
							<button className="chatSubmitButton">Send</button>
						</div>
					</div>
				</div>
				<div className="chatOnline">
					<div className="chatOnlineWrapper">
						<ChatOnline />
						<ChatOnline />
						<ChatOnline />
						<ChatOnline />
						<ChatOnline />
						<ChatOnline />
						<ChatOnline />
						<ChatOnline />
						<ChatOnline />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Messenger;
