import React from "react";
import PropTypes from "prop-types";
import Number from "./number";

//create your first component
const Home = props => {
	return (
		<div
			className="container d-flex bg-dark justify-content-center text-white align-items-center text-center"
			style={{ width: "30%", height: "100px" }}>
			<div className="row">
				<div className="col border bg-secondary m-1">
					<div>
						<i className="far fa-clock"></i>
					</div>
				</div>
				<Number counter={props.counter} />
				<Number counter={props.counter} />
				<Number counter={props.counter} />
				<Number counter={props.counter} />
				<Number counter={props.counter} />
				<Number counter={props.counter} />
			</div>
		</div>
	);
};

Home.propTypes = {
	counter: PropTypes.number
};

export default Home;
