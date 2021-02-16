import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { asyncStart, asyncEnd, asyncError } from "../redux/actions/asyncAction";
import { dataFromSnapshot } from "../firebase/firebaseService";

export default function useFirestoreDoc({
	query,
	data,
	deps,
	shouldExe = true,
}) {
	const dispatch = useDispatch();

	useEffect(() => {
		if (!shouldExe) return;
		dispatch(asyncStart());
		const unsubscribe = query().onSnapshot(
			(snapshot) => {
				if (!snapshot.exists) {
					dispatch(
						asyncError({
							code: "not-found",
							message: "could not find the event",
						})
					);
					return;
				}
				data(dataFromSnapshot(snapshot));
				dispatch(asyncEnd());
			},
			(error) => dispatch(asyncError(error))
		);

		return () => unsubscribe();
	}, deps);
}
