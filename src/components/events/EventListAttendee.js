import {Image, List} from 'semantic-ui-react';

const EventListAttendee= ({attendee}) => {
	return(
		<List.Item>
			<Image size="mini" circular src={attendee.photoURL}/>
		</List.Item>
		)
}
export default EventListAttendee;