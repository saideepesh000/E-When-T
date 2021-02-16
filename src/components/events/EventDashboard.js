import { Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

import EventList from "./EventList";
import EventFilters from "./EventFilters";
import EventListItemPlaceholder from "./eventDetailed/EventListItemPlaceholder";

import { fetchEventsFirestore } from "../../redux/actions/eventAction";

import { listenToEventsFromFS } from "../../firebase/firebaseService";

import useFirestoreCollection from "../../utils/useFirestoreCollection";

const EventDashboard = () => {
	const dispatch = useDispatch();
	const { events } = useSelector((state) => state.event);
	const { loading } = useSelector((state) => state.async);

	// useEffect(() => {
	// 	dispatch(asyncStart());
	// 	const unsubscribe = getEvents({
	// 		next: (snapshot) => {
	// 			dispatch(
	// 				fetchEventsFirestore(
	// 					snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
	// 				)
	// 			);
	// 			dispatch(asyncEnd());
	// 		},
	// 		error: (error) => dispatch(asyncError(error)),
	// 	});
	// 	return unsubscribe;
	// }, [dispatch]);

	useFirestoreCollection({
		query: () => listenToEventsFromFS(),
		data: (events) => dispatch(fetchEventsFirestore(events)),
		deps: [dispatch],
	});

	return (
		<Grid>
			<Grid.Column width={10}>
				{loading && (
					<>
						<EventListItemPlaceholder />
						<EventListItemPlaceholder />
					</>
				)}
				<EventList events={events} />
			</Grid.Column>
			<Grid.Column width={6}>
				<EventFilters />
			</Grid.Column>
		</Grid>
	);
};

export default EventDashboard;
