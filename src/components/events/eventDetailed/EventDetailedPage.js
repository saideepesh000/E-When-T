import { Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import EventDetailedSidebar from "./EventDetailedSidebar";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import ErrorComponent from "../../ErrorComponent";

import { fetchEventsFirestore } from "../../../redux/actions/eventAction";

import { listenToEventFromFS } from "../../../firebase/firebaseService";
import useFirestoreDoc from "../../../utils/useFirestoreDoc";

const EventDetailedPage = ({ match }) => {
	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.async);
	const event = useSelector((state) =>
		state.event.events.find((e) => e.id === match.params.id)
	);

	useFirestoreDoc({
		query: () => listenToEventFromFS(match.params.id),
		data: (event) => dispatch(fetchEventsFirestore([event])),
		deps: [match.params.id],
	});

	if (error) {
		return <Redirect to="/error" />;
	}

	if (loading || (!event && !error)) {
		return (
			<>
				<h1>loading..</h1>
			</>
		);
	}

	return (
		<Grid>
			<Grid.Column width={10}>
				<EventDetailedHeader event={event} />
				<EventDetailedInfo event={event} />
				<EventDetailedChat />
			</Grid.Column>
			<Grid.Column width={6}>
				<EventDetailedSidebar attendees={event?.attendees} />
			</Grid.Column>
		</Grid>
	);
};

export default EventDetailedPage;
