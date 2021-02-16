import { Segment, Item, Icon, Button, List, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useDispatch } from "react-redux";

import EventListAttendee from "./EventListAttendee";
import { deleteEvent } from "../../redux/actions/eventAction";

import { deleteEventToFS } from "../../firebase/firebaseService";

const EventListItem = ({ event }) => {
	const dispatch = useDispatch();
	return (
		<Segment.Group>
			<Segment>
				<Item.Group>
					<Item>
						<Item.Image size="tiny" circular src={event.hostPhotoURL} />
						<Item.Content>
							<Item.Header content={event.title} />
							<Item.Description>Host By {event.hostedBy}</Item.Description>
							{event.isCancelled && (
								<Label
									style={{ top: "-40px" }}
									ribbon="right"
									color="red"
									content="This Is A Cancelled Event"
								/>
							)}
						</Item.Content>
					</Item>
				</Item.Group>
			</Segment>
			<Segment>
				<span>
					<Icon name="clock" /> {format(event.date, "MMMM dd, yyyy hh:mm a")}
					<Icon name="marker" /> {event.venue}
				</span>
			</Segment>
			<Segment secondary>
				<List horizontal>
					{event.attendees.map((attendee, i) => (
						<EventListAttendee key={i} attendee={attendee} />
					))}
				</List>
			</Segment>
			<Segment clearing>
				<div>{event.description}</div>
				<Button
					onClick={() => deleteEventToFS(event.id)}
					basic
					color="blue"
					floated="right"
					content="Delete"
				/>
				<Button
					as={Link}
					to={`/events/${event.id}`}
					color="blue"
					floated="right"
					content="View"
				/>
			</Segment>
		</Segment.Group>
	);
};
export default EventListItem;
