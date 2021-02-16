import { SIGN_IN, SIGN_OUT } from "../types";

const initialState = {
	authenticated: false,
	currentUser: null,
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				authenticated: true,
				currentUser: {
					email: action.payload.email,
					photoURL: "/media/user.png",
				},
			};

		case SIGN_OUT:
			return {
				...state,
				authenticated: false,
				currentUser: null,
			};
		default:
			return state;
	}
}
