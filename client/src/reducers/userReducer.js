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
		case Actions.LOGIN_SUCCESS:
			return {
				...state,
				data: action.payload,
				error: null,
			};
		case Actions.UNFOLLOW_SUCCESS:
			return {
				...state,
				data: {
					...state.data,
					followings: state.data.followings.filter(
						(item) => item !== action.id
					),
				},
			};
		case Actions.FOLLOW_SUCCESS:
			return {
				...state,
				data: {
					...state.data,
					followings: state.data.followings.includes(action.id)
						? [...state.data.followings]
						: [...state.data.followings, action.id],
				},
			};
		default:
			return { ...state };
	}
};

export default userReducer;
