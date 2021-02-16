import { Header, Segment, Button } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomInput from "../form/CustomInput";
import CustomTextArea from "../form/CustomTextArea";
import CustomSelect from "../form/CustomSelect";
import CustomDatePicker from "../form/CustomDatePicker";
import categoryOptions from "../../api/categoryOptions";

import {
	updateEvent,
	createEvent,
	fetchEventsFirestore,
} from "../../redux/actions/eventAction";

import {
	listenToEventFromFS,
	updateEventToFS,
	addEventToFS,
	cancelEventTog,
} from "../../firebase/firebaseService";
import useFirestoreDoc from "../../utils/useFirestoreDoc";

const EventForm = ({ match, history }) => {
	const dispatch = useDispatch();

	const { loading, error } = useSelector((state) => state.async);
	const selectedEvent = useSelector((state) =>
		state.event.events.find((e) => e.id === match.params.id)
	);

	const data = selectedEvent ?? {
		title: "",
		category: "",
		description: "",
		city: "",
		venue: "",
		date: "",
	};

	const FormSchema = Yup.object({
		title: Yup.string().required("title is required"),
		category: Yup.string().required("category is required"),
		description: Yup.string().required("description is required"),
		city: Yup.string().required(),
		venue: Yup.string().required(),
		date: Yup.string().required(),
	});

	useFirestoreDoc({
		shouldExe: !!match.params.id,
		query: () => listenToEventFromFS(match.params.id),
		data: (selectedEvent) => dispatch(fetchEventsFirestore([selectedEvent])),
		deps: [match.params.id],
	});

	if (error) {
		return <Redirect to="/error" />;
	}

	if (loading) {
		return (
			<>
				<h1>loading..</h1>
			</>
		);
	}

	return (
		<div className="form-segment">
			<Segment clearing>
				<Formik
					validationSchema={FormSchema}
					initialValues={data}
					onSubmit={async (eventData, { setSubmitting }) => {
						try {
							selectedEvent
								? await updateEventToFS(eventData)
								: await addEventToFS(eventData);
							history.push("/events");
						} catch (e) {
							console.log(e.message);
							setSubmitting(false);
						}
					}}
				>
					{({ isSubmitting, dirty, isValid }) => (
						<Form className="ui form">
							<Header sub color="blue" content="Event Details" />
							<CustomInput placeholder="Event Name" name="title" />
							<CustomSelect
								placeholder="Category"
								name="category"
								options={categoryOptions}
							/>
							<CustomTextArea
								rows={3}
								placeholder="description"
								name="description"
							/>
							<Header sub color="blue" content="Event Location Details" />

							<CustomInput placeholder="City" name="city" />
							<CustomInput placeholder="Venue" name="venue" />
							<CustomDatePicker
								name="date"
								placeholderText="Event date"
								timeFormat="HH:mm"
								showTimeSelect
								timeCaption="time"
								dateFormat="MMMM d, yyyy h:mm a"
								autoComplete="off"
							/>
							<Button
								type="button"
								floated="left"
								color={selectedEvent?.isCancelled ? "green" : "red"}
								content={
									selectedEvent?.isCancelled ? "Restart Event" : "Cancel Event"
								}
								onClick={() => cancelEventTog(selectedEvent)}
							/>

							<Button
								loading={isSubmitting}
								disabled={!isValid || isSubmitting || !dirty}
								type="submit"
								floated="right"
								positive
								content="Submit"
							/>
							<Button
								disabled={isSubmitting}
								as={Link}
								to="/events"
								type="submit"
								floated="right"
								content="Cancel"
							/>
						</Form>
					)}
				</Formik>
			</Segment>
		</div>
	);
};

export default EventForm;
