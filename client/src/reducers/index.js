import { combineReducers } from "redux";
import userReducer from "./userReducer";
import friendReducer from "./friendReducer";
const rootReducer = combineReducers({
	user: userReducer,
	friends: friendReducer,
});
export default rootReducer;
