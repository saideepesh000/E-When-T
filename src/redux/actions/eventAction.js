import {
	CREATE_EVENT,
	UPDATE_EVENT,
	DELETE_EVENT,
	FETCH_EVENTS,
} from "../types";
import { asyncStart, asyncEnd, asyncError } from "./asyncAction";
import { fetchDemoData } from "../../api/demoApi";

export const fetchEvents = () => async (dispatch) => {
	dispatch(asyncStart());
	try {
		const events = await fetchDemoData();
		dispatch({ type: FETCH_EVENTS, payload: events });
		dispatch(asyncEnd());
	} catch (e) {
		dispatch(asyncError(e));
		console.log("error in fetchEvents", e);
	}
};

export const fetchEventsFirestore = (events) => {
	return { type: FETCH_EVENTS, payload: events };
};

export const createEvent = (event) => {
	return {
		type: CREATE_EVENT,
		payload: event,
	};
};

export const updateEvent = (event) => {
	return {
		type: UPDATE_EVENT,
		payload: event,
	};
};

export const deleteEvent = (eventId) => {
	return {
		type: DELETE_EVENT,
		payload: eventId,
	};
};
