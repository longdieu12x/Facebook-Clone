import axios from "axios";
import Actions from "src/configs/Actions";
export const userFriendsHandler = (user_id) => async (dispatch) => {
	axios
		.get(`${process.env.REACT_APP_API}/users/friends/${user_id}`)
		.then((res) => {
			dispatch({
				type: Actions.GET_FRIENDS_SUCCESS,
				payload: res,
			});
		})
		.catch((err) => {
			if (err.response) {
				dispatch({
					type: Actions.GET_FRIENDS_FAIL,
					payload: err.response,
				});
			}
		});
};
