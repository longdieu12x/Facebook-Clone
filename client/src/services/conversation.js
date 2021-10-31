import axios from "axios";
export const createConversation = (senderId, receiverId, callback) => {
	axios
		.post(`${process.env.REACT_APP_API}/conversations`, {
			senderId: senderId,
			receiverId: receiverId,
		})
		.then((res) => {
			callback(res.data);
		})
		.catch((err) => {
			if (err.response) {
				callback(err.response.data);
			}
		});
};
export const getMessageConversation = (conversation_id, callback) => {
	axios
		.get(`${process.env.REACT_APP_API}/messages/${conversation_id}`)
		.then((res) => {
			callback(res.data);
		})
		.catch((err) => {
			if (err.response) {
				callback(err.response.data);
			}
		});
};
export const sendMessge = (values, callback) => {
	axios
		.post(`${process.env.REACT_APP_API}/messages`, values)
		.then((res) => {
			callback(res.data);
		})
		.catch((err) => {
			if (err.response) {
				callback(err.response.data);
			}
		});
};
export const getSpecialConversation = (firstUserId, secondUserId, callback) => {
	axios
		.get(
			`${process.env.REACT_APP_API}/conversations/${firstUserId}/${secondUserId}`
		)
		.then((res) => {
			callback(res.data);
		})
		.catch((err) => {
			if (err.response) {
				callback(err.response.data);
			}
		});
};
