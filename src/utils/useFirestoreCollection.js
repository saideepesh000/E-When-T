import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { asyncStart, asyncEnd, asyncError } from "../redux/actions/asyncAction";
import { dataFromSnapshot } from "../firebase/firebaseService";

export default function useFirestoreCollection({ query, data, deps }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncStart());
		const unsubscribe = query().onSnapshot(
			(snapshot) => {
				const docs = snapshot.docs.map((doc) => dataFromSnapshot(doc));
				data(docs);
				dispatch(asyncEnd());
			},
			(error) => dispatch(asyncError(error))
		);

		return () => unsubscribe();
	}, deps);
}
