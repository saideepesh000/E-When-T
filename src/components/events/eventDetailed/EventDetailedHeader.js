import { Segment, Image, Header, Item, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const eventImageStyle = {
	filter: "brightness(30%)",
};

const eventImageTextStyle = {
	position: "absolute",
	bottom: "5%",
	left: "5%",
	width: "100%",
	height: "auto",
	color: "white",
};

const EventDetailedHeader = ({ event }) => {
	return (
		<Segment.Group>
			<Segment basic attached="top" style={{ padding: "0" }}>
				<Image
					src={`/media/categoryImages/${event.category}.jpg`}
					fluid
					style={eventImageStyle}
				/>

				<Segment basic style={eventImageTextStyle}>
					<Item.Group>
						<Item>
							<Item.Content>
								<Header
									size="huge"
									content={event.title}
									style={{ color: "white" }}
								/>
								<p>{format(event.date, "MMMM d, yyyy h:mm a")}</p>
								<p>
									Hosted by <strong>{event.hostedBy}</strong>
								</p>
							</Item.Content>
						</Item>
					</Item.Group>
				</Segment>
			</Segment>

			<Segment attached="bottom">
				<Button basic color="blue">
					Cancel My Place
				</Button>
				<Button color="blue">JOIN THIS EVENT</Button>

				<Button
					as={Link}
					to={`/manage/${event.id}`}
					color="orange"
					floated="right"
				>
					Manage Event
				</Button>
			</Segment>
		</Segment.Group>
	);
};

export default EventDetailedHeader;
