import EventListItem from "./EventListItem";
// import LocationSearchInput from "../LocationSearchInput";

const EventList = ({ events }) => {
	return (
		<>
			{events.map((event) => (
				<EventListItem key={event.id} event={event} />
			))}
		</>
	);
};
export default EventList;
