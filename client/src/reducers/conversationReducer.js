import Actions from "src/configs/Actions";
const initialState = {};

const conversationReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_CONVERSATIONS_SUCCESS:
			return {
				...state,
				...action.payload.data,
			};
		default:
			return { ...state };
	}
};

export default conversationReducer;
