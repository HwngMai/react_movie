import { combineReducers } from "redux";
import { userReducer } from "./reducerUser";
export const rootReducer = combineReducers({
  userReducer: userReducer,
});
