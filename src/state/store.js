import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { postListReducer, postDetailReducer } from "./reducers/postReducer";

const initialState = {}
const middleware = [thunk]
const reducers = combineReducers({
    postList: postListReducer,
    postDetail: postDetailReducer
})
const store = createStore(reducers, initialState, applyMiddleware(...middleware));

export default store