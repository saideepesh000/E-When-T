import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "react-calendar/dist/Calendar.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import App from "./App";

function render() {
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		document.getElementById("root")
	);
}

if (module.hot) {
	module.hot.accept("./App", function () {
		setTimeout(render);
	});
}
render();
