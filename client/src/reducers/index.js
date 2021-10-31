import { combineReducers } from "redux";
import userReducer from "./userReducer";
import friendReducer from "./friendReducer";
import conversationReducer from "./conversationReducer";

const rootReducer = combineReducers({
	user: userReducer,
	friends: friendReducer,
	conversations: conversationReducer,
});
export default rootReducer;
