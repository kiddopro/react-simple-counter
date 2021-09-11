//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(function() {
	ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
	counter++;
	counter == 10 ? (counter = 0) : counter;
}, 1);
