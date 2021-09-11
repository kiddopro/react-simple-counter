import React from "react";
import PropTypes from "prop-types";
import Number from "./number";

//create your first component
let cont2 = 0,
	cont3 = 0,
	cont4 = 0,
	cont5 = 0,
	cont6 = 0;
const Home = props => {
	cont2 =
		props.counter == 9 ? (cont2 += 1) : cont2 == 9 ? (cont2 = 0) : cont2;
	cont3 = cont2 == 9 ? (cont3 += 1) : cont3 == 9 ? (cont3 = 0) : cont3;
	cont4 = cont3 == 9 ? (cont4 += 1) : cont4 == 9 ? (cont4 = 0) : cont4;
	cont5 = cont4 == 9 ? (cont5 += 1) : cont5 == 9 ? (cont5 = 0) : cont5;
	cont6 = cont5 == 9 ? (cont6 += 1) : cont6 == 9 ? (cont6 = 0) : cont6;
	return (
		<div
			className="container d-flex bg-dark justify-content-center text-white align-items-center text-center overflow-hidden"
			style={{ width: "40%", height: "100px" }}>
			<div className="row flex-nowrap" style={{ width: "100%" }}>
				<div className="col border bg-secondary m-1 py-4">
					<div>
						<i className="far fa-clock"></i>
					</div>
				</div>
				<Number counter={cont6} />
				<Number counter={cont5} />
				<Number counter={cont4} />
				<Number counter={cont3} />
				<Number counter={cont2} />
				<Number counter={props.counter} />
			</div>
		</div>
	);
};

Home.propTypes = {
	counter: PropTypes.number
};

export default Home;
