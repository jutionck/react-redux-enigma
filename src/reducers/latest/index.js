import { combineReducers } from "redux";
import latestTodo from "./latestReducer";

const latestReducer = combineReducers({
    latestTodo
});

export default latestReducer;