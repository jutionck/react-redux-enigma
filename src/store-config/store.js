import { createStore } from "redux";
import reducer from "../reducers/food";

const store = createStore(reducer);

export { store };