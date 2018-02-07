import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App.jsx";
import registerServiceWorker from "./registerServiceWorker";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();