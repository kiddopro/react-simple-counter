import React from "react";
import PropTypes from "prop-types";

const Number = props => {
	return (
		<div className="col border bg-secondary m-1 py-4">
			<div>{props.counter}</div>
		</div>
	);
};

Number.propTypes = {
	counter: PropTypes.number
};
export default Number;
