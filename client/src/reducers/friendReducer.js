import Actions from "src/configs/Actions";
const initialState = {
	data: {},
};

const friendReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_FRIENDS_SUCCESS:
			return {
				...state,
				data: action.payload.data,
			};
		default:
			return { ...state };
	}
};

export default friendReducer;
