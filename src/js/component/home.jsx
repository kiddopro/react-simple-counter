import React from "react";
import PropTypes from "prop-types";

//create your first component
const Home = props => {
	return (
		<div
			className="container d-flex bg-dark justify-content-center text-white align-items-center text-center"
			style={{ width: "30%", height: "100px" }}>
			<div className="row">
				<div className="col border bg-secondary">
					<div>
						<i className="far fa-clock"></i>
					</div>
				</div>
				<div className="col border bg-secondary">
					<div>0</div>
				</div>
				<div className="col border bg-secondary">
					<div>0</div>
				</div>
				<div className="col border bg-secondary">
					<div>0</div>
				</div>
				<div className="col border bg-secondary">
					<div>0</div>
				</div>
				<div className="col border bg-secondary">
					<div>0</div>
				</div>
				<div className="col border bg-secondary">
					<div>{props.counter}</div>
				</div>
			</div>
		</div>
	);
};

Home.propTypes = {
	counter: PropTypes.number
};

export default Home;
