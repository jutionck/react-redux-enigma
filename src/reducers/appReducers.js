import { userReducer } from "./index";
import { combineReducers } from "redux";

export const appReducer = combineReducers({
    user: userReducer
})