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
export const userRegisterHandler = (values, callback) => {
	axios
		.post(`${process.env.REACT_APP_API}/auth/register`, values)
		.then((res) => {
			callback(res.data);
		})
		.catch((err) => {
			if (err.response) {
				callback(err.response.data);
			}
		});
};
export const getUserFriends = (user_id, callback) => {
	axios
		.get(`${process.env.REACT_APP_API}/users/friends/${user_id}`)
		.then((res) => {
			callback(res.data);
		})
		.catch((err) => {
			if (err.response) {
				callback(err.response.data);
			}
		});
};
export const userFollowHandler = (
	followed,
	user_id,
	currentUserId,
	callback
) => {
	let api;
	followed
		? (api = `${process.env.REACT_APP_API}/users/${user_id}/unfollow`)
		: (api = `${process.env.REACT_APP_API}/users/${user_id}/follow`);
	axios
		.put(api, { userId: currentUserId })
		.then((res) => {
			callback(res.data);
		})
		.catch((err) => {
			if (err.response) {
				callback(err.response.data);
			}
		});
};
export function storeUserData(data) {
	const { password, ...user } = data;
	// console.log(data);
	// console.log(user);
	localStorage.setItem(
		`${process.env.REACT_APP_CONFIG_NAME}_user`,
		JSON.stringify(user)
	);
	// window.location.reload();
}
