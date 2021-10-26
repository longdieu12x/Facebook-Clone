import Actions from "src/configs/Actions";
const initialState = {};

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
		default:
			return { ...state };
	}
};

export default userReducer;
