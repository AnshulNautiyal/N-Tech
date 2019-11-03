import React from "react";
import ReactDOM from "react-dom";
import "./scss/import.scss";
import DOM from "./components/DOM";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(<DOM />, document.getElementById("root"));
ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< DOM /></Router>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
