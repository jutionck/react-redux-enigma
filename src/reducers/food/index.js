import { combineReducers } from "redux";
import foodTodo from "./foodReducer";

const foodReducer = combineReducers({
    foodTodo
});

export default foodReducer;