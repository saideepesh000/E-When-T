import {
	CREATE_EVENT,
	UPDATE_EVENT,
	DELETE_EVENT,
	FETCH_EVENTS,
} from "../types";
import { sampleData } from "../../api/sampleData";

const initialState = {
	events: [],
};

export default function eventReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_EVENTS:
			return {
				...state,
				events: action.payload,
			};
		case CREATE_EVENT:
			return {
				...state,
				events: [...state.events, action.payload],
			};

		case UPDATE_EVENT:
			return {
				...state,
				events: [
					...state.events.filter((e) => e.id !== action.payload.id),
					action.payload,
				],
			};

		case DELETE_EVENT:
			return {
				...state,
				events: [...state.events.filter((e) => e.id !== action.payload)],
			};
		default:
			return state;
	}
}
