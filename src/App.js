import { Container } from "semantic-ui-react";
import { Switch, Route, useLocation } from "react-router-dom";

import Navbar from "./components/nav/Navbar";
import EventDashboard from "./components/events/EventDashboard";
import EventDetailedPage from "./components/events/eventDetailed/EventDetailedPage";
import EventForm from "./components/events/EventForm";
import HomePage from "./components/HomePage";
import ErrorComponent from "./components/ErrorComponent";
import ModalManager from "./components/modal/ModalManager";

const App = () => {
	const { key } = useLocation();
	return (
		<>
			<ModalManager />
			<Route exact path="/" component={HomePage} />
			<Route
				path={"/(.+)"}
				render={() => (
					<>
						<Navbar />
						<Container className="main">
							<Switch>
								<Route exact path="/events" component={EventDashboard} />
								<Route exact path="/events/:id" component={EventDetailedPage} />
								<Route
									exact
									path={["/createEvent", "/manage/:id"]}
									key={key}
									component={EventForm}
								/>
								<Route exact path="/error" component={ErrorComponent} />
							</Switch>
						</Container>
					</>
				)}
			/>
		</>
	);
};
export default App;

// <EventDashboard
// 			formOpen={formOpen}
// 			setFormOpen={setFormOpen}
// 			selectEvent={handleSelectEvent}
// 			selectedEvent={selectedEvent}
// 		/>
