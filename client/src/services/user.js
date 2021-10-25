import axios from "axios";

export const getUserDetail = async (user_id, callback) => {
	axios
		.get(`${process.env.REACT_APP_API}/users/${user_id}`)
		.then((res) => {
			callback(res.data);
		})
		.catch((err) => {
			if (err.response) {
				callback(err.response.data);
			}
		});
};
export const getProfile = async (user_id, callback) => {
	axios
		.get(`${process.env.REACT_APP_API}/posts/profile/${user_id}`)
		.then((res) => {
			callback(res.data);
		})
		.catch((err) => {
			if (err.response) {
				callback(err.response.data);
			}
		});
};
