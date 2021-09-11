//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//ponemos el contador en 0 y cada un segundo se va a sumar hasta ser 9, luego vuelve a ser 0
let counter = 0;
setInterval(function() {
	counter === 10 ? (counter = 0) : counter;
	ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
	counter++;
}, 1000);
