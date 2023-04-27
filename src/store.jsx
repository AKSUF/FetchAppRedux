import { createStore } from "redux";
import todosReducer from "./services/reducer/todosreducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store=createStore(todosReducer,applyMiddleware(thunk));
export default store;