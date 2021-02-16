import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import eventReducer from "./reducers/eventReducer";
import modalReducer from "./reducers/modalReducer";
import authReducer from "./reducers/authReducer";
import asyncReducer from "./reducers/asyncReducer";

import { verifyAuth } from "./actions/authAction";

const reducers = combineReducers({
	event: eventReducer,
	modal: modalReducer,
	auth: authReducer,
	async: asyncReducer,
});

const middleware = [thunk];
const init = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	init,
	composeEnhancers(applyMiddleware(...middleware))
);
store.dispatch(verifyAuth());

export default store;
