import { combineReducers } from "redux";
import { spinnerReducer } from "./reducerSpinner";
import { userReducer } from "./reducerUser";
export const rootReducer = combineReducers({
  userReducer: userReducer,
  spinnerReducer: spinnerReducer,
  
});
