import { ASYNC_START, ASYNC_END, ASYNC_ERROR } from "../types";

const initialState = {
	loading: false,
	error: null,
};

export default function asyncReducer(state = initialState, action) {
	switch (action.type) {
		case ASYNC_START:
			return {
				...state,
				loading: true,
				error: null,
			};
		case ASYNC_END:
			return {
				...state,
				loading: false,
			};
		case ASYNC_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
}
