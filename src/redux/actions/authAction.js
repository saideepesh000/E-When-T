import { SIGN_IN, SIGN_OUT } from "../types";
import firebase from "../../firebase/firebase";

export const signIn = (payload) => async (dispatch) => {
	try {
		const result = await firebase
			.auth()
			.signInWithEmailAndPassword(payload.email, payload.password);
		dispatch({ type: SIGN_IN, payload });
	} catch (e) {
		throw e;
	}
};

export const verifyAuth = () => (dispatch) => {
	return firebase.auth().onAuthStateChanged((payload) => {
		if (!payload) {
			dispatch({ type: SIGN_IN, payload });
		} else {
			dispatch({ type: SIGN_OUT });
		}
	});
};
export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};
