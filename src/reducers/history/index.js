import { combineReducers } from "redux";
import historyTodo from "./historyReducer";

const historyReducer = combineReducers({
    historyTodo
});

export default historyReducer;