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
	(user_id, currentUserId) => async (dispatch) => {
		let api;
		api = `${process.env.REACT_APP_API}/users/${user_id}/follow`;
		axios.put(api, { userId: currentUserId }).then(() => {
			dispatch({
				type: Actions.FOLLOW_SUCCESS,
				id: user_id,
			});
		});
	};
export const userUnfollowHandler =
	(user_id, currentUserId) => async (dispatch) => {
		let api;
		api = `${process.env.REACT_APP_API}/users/${user_id}/unfollow`;
		axios.put(api, { userId: currentUserId }).then(() => {
			dispatch({
				type: Actions.UNFOLLOW_SUCCESS,
				id: user_id,
			});
		});
	};
