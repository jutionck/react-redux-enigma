import { combineReducers } from "redux";
import foodReducer from "./food";
import userReducer from "./user";


const rootReducer = combineReducers({
    foodReducer: foodReducer,
    userReducer: userReducer    ,
});

export default rootReducer;