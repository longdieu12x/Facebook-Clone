import axios from "axios";
import Actions from "src/configs/Actions";
export const getAllConversations = (user_id) => async (dispatch) => {
	axios
		.get(`${process.env.REACT_APP_API}/conversations/${user_id}`)
		.then((res) => {
			dispatch({
				type: Actions.GET_CONVERSATIONS_SUCCESS,
				payload: res,
			});
		})
		.catch((err) => {
			if (err.response) {
				dispatch({
					type: Actions.GET_CONVERSATIONS_FAIL,
					payload: err.response,
				});
			}
		});
};
