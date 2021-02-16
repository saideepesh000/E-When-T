import { Segment, Item } from "semantic-ui-react";

const EventDetailedSidebar = ({ attendees }) => {
    return (
        <>
            <Segment
                textAlign="center"
                style={{ border: "none" }}
                attached="top"
                secondary
                inverted
                color="blue"
            >
                {attendees.length} {attendees.length > 1 ? "People" : "Person"}{" "}
                Going
            </Segment>
            <Segment attached>
                {attendees.map((attendee) => (
                    <Item.Group relaxed divided>
                        <Item style={{ position: "relative" }}>
                            <Item.Image
                                size="tiny"
                                key={attendee.id}
                                src={`${attendee.photoURL}`}
                            />
                            <Item.Content verticalAlign="middle">
                                <Item.Header as="h3">
                                    <span>{attendee.name}</span>
                                </Item.Header>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                ))}
            </Segment>
        </>
    );
};

export default EventDetailedSidebar;
