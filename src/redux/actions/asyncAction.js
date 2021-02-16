import { ASYNC_START, ASYNC_END, ASYNC_ERROR } from "../types";

export const asyncStart = () => {
	return {
		type: ASYNC_START,
	};
};

export const asyncEnd = () => {
	return {
		type: ASYNC_END,
	};
};

export const asyncError = (error) => {
	return {
		type: ASYNC_ERROR,
		payload: error,
	};
	console.log(error);
};
