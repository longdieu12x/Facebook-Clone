import Actions from "src/configs/Actions";
const initialState = {
	data:
		JSON.parse(
			localStorage.getItem(`${process.env.REACT_APP_CONFIG_NAME}_user`)
		) || {},
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.LOGIN_SUCCESS:
			return {
				...state,
				data: action.payload,
				error: null,
			};
		case Actions.LOGIN_FAIL:
			return {
				...state,
				data: {},
				error: action.payload,
			};
		case Actions.LOGOUT_SUCCESS:
			return {
				...state,
				data: {},
				error: null,
			};
		default:
			return { ...state };
	}
};

export default userReducer;
