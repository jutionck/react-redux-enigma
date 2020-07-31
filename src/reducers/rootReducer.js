import { combineReducers } from "redux";
import latestReducer from "./latest";
import historyReducer from "./history";


const rootReducer = combineReducers({
    latestReducer: latestReducer,
    historyReducer: historyReducer
});

export default rootReducer;