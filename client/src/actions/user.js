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
