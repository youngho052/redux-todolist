import { combineReducers } from "redux";
import { todoList } from "./todoReducer/reducer";

const rootReducer = combineReducers({ todoList });

export default rootReducer;
