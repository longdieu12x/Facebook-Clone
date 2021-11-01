import "./Messenger.css";
import React, { useEffect, useRef, useState } from "react";
import Topbar from "src/components/Topbar/Topbar";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Conversation from "src/components/conversation/Conversation";
import Message from "src/components/message/Message";
import ScrollToBottom from "react-scroll-to-bottom";
import ChatOnline from "src/components/chatOnline/ChatOnline";
import {
	getMessageConversation,
	createConversation,
	sendMessge,
} from "src/services/conversation";
import { v4 as uuidv4 } from "uuid";
import { getAllConversations } from "src/actions/conversation";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";

const Messenger = () => {
	const messageEl = useRef(null);
	const [messages, setMessages] = useState([]);
	const [currentMessage, setCurrentMessage] = useState("");
	const [conversationId, setConversationId] = useState("");
	const [pageOnlineUser, setPageOnlineUser] = useState(10); // get 10 person user each time
	const [pageMessage, setPageMessage] = useState(20); // get 20 message user each time
	const [friendId, setFriendId] = useState("");
	const socket = useRef();
	const dispatch = useDispatch();
	const [onlineUsers, setOnlineUsers] = useState([]); // Những người đang online trên facebook
	const { user, friends, conversations } = useSelector((state) => state);
	const loggedUserid = user.data._id;
	let existedConversations = {};

	useEffect(() => {
		if (Object.keys(user.data).length !== 0) {
			socket.current = io(`${process.env.REACT_APP_SOCKET_API}`, {
				transports: ["websocket", "polling", "flashsocket"],
			});
			socket.current.on("getMessage", (data) => {
				setMessages((state) => [
					...state,
					{
						sender: data.senderId,
						text: data.text,
						createdAt: Date.now(),
					},
				]);
			});
		}
	}, []);

	useEffect(() => {
		if (Object.keys(user.data).length !== 0) {
			socket.current.emit("addUser", user.data._id);
			socket.current.on("getUsers", (user) => {
				console.log(user);
				setOnlineUsers(user);
			});
		}
	}, [user]);

	if (Object.keys(user.data).length === 0) {
		return <Redirect to="/login" />;
	}
	// kiểm tra xem đã trò chuyện chưa ( có trong list conversations chưa ), có rồi thì get Message chưa có thì create
	const conversationHandler = (friend_id) => {
		setFriendId(friend_id);
		if (Object.keys(conversations).length !== 0) {
			existedConversations = Object.values(conversations).filter((item) =>
				item.members.includes(friend_id)
			);
		}
		if (Object.keys(existedConversations).length !== 0) {
			const existedConversationId = existedConversations[0]._id;
			setConversationId(existedConversationId);
			getMessageConversation(existedConversationId, (res) => {
				setMessages(res);
			});
		} else {
			createConversation(loggedUserid, friend_id, (res) => {
				dispatch(getAllConversations(loggedUserid)); //update converasations in redux
			});
		}
	};
	const sendMessageHandler = () => {
		if (conversationId) {
			const values = {
				conversationId: conversationId,
				sender: loggedUserid,
				text: currentMessage,
			};
			sendMessge(values, (res) => {
				// console.log(res);
			});
			socket.current.emit("sendMessage", {
				senderId: loggedUserid,
				receiverId: friendId,
				text: currentMessage,
			});
			setMessages((state) => [
				...state,
				{
					sender: loggedUserid,
					text: currentMessage,
					createdAt: Date.now(),
				},
			]);
			setCurrentMessage("");
		} else {
			alert(
				"You are not in any conversation! Please make a conversation with your friend to continue."
			);
		}
	};
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
							friends.data.map((friend) => (
								<Conversation
									conversationHandler={conversationHandler}
									key={uuidv4()}
									friend={friend}
									data-key={friend._id}
								/>
							))}
					</div>
				</div>
				<div className="chatBox">
					<div className="chatboxWrapper">
						<ScrollToBottom className="chatBoxTop">
							{Object.keys(messages).length !== 0 &&
								messages
									.slice(pageMessage)
									.map((item) => (
										<Message
											key={uuidv4()}
											user_id={item.sender}
											time={item.createdAt}
											message={item.text}
											own={item.sender === loggedUserid ? true : false}
										/>
									))}
						</ScrollToBottom>
						<div className="chatBoxBottom">
							<textarea
								placeholder="Write something..."
								name=""
								id=""
								cols="30"
								rows="10"
								className="chatMessageInput"
								value={currentMessage}
								onChange={(e) => setCurrentMessage(e.target.value)}
							></textarea>
							<button className="chatSubmitButton" onClick={sendMessageHandler}>
								Send
							</button>
						</div>
					</div>
				</div>
				<div className="chatOnline">
					<div className="chatOnlineWrapper">
						{onlineUsers &&
							onlineUsers
								.slice(0, pageOnlineUser)
								.map((onlineUser) => (
									<ChatOnline
										key={uuidv4()}
										currentUserId={loggedUserid}
										onlineUserId={onlineUser.userId}
										conversationHandler={conversationHandler}
									/>
								))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Messenger;
