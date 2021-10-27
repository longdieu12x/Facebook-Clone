import axios from "axios";
import Actions from "src/configs/Actions";
export const userLoginHandler = (values) => async (dispatch) => {
	axios
		.post(`${process.env.REACT_APP_API}/auth/login`, values)
		.then((res) => {
			dispatch({
				type: Actions.LOGIN_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			if (err.response) {
				dispatch({
					type: Actions.LOGIN_FAIL,
					payload: err.response.data,
				});
			}
		});
};
export const userLogoutHandler = () => {
	localStorage.removeItem(`${process.env.REACT_APP_CONFIG_NAME}_user`);
	return {
		type: Actions.LOGOUT_SUCCESS,
	};
};
export const userFollowHandler =
	(followed, user_id, currentUserId) => async (dispatch) => {
		let api;
		followed
			? (api = `${process.env.REACT_APP_API}/users/${user_id}/unfollow`)
			: (api = `${process.env.REACT_APP_API}/users/${user_id}/follow`);
		axios
			.put(api, { userId: currentUserId })
			.then((res) => {
				if (followed) {
					dispatch({
						type: Actions.FOLLOW_SUCCESS,
						id: user_id,
					});
				} else {
					dispatch({
						type: Actions.UNFOLLOW_SUCCESS,
						id: user_id,
					});
				}
			})
			.catch((err) => {
				if (followed) {
					dispatch({
						type: Actions.FOLLOW_FAIL,
						id: user_id,
					});
				} else {
					dispatch({
						type: Actions.UNFOLLOW_FAIL,
						id: user_id,
					});
				}
			});
	};
