import React from "react";
import PropTypes from "prop-types";

const Number = props => {
	return (
		<div className="col border m-1 py-4 " style={{ width: "100%" }}>
			<div>{props.counter}</div>
		</div>
	);
};

Number.propTypes = {
	counter: PropTypes.number
};
export default Number;
