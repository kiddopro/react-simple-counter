import React from "react";
import PropTypes from "prop-types";
import CounterContainer from "./counterContainer";

//Aqui juntamoslos componentes y los metemos en un container, el parametro counter pasa a counterContainer para que haga su trabajo

const Home = props => {
	return (
		<div
			className="container d-flex bg-dark justify-content-center text-white align-items-center text-center overflow-hidden my-5"
			style={{ width: "50%", height: "100px" }}>
			<CounterContainer counter={props.counter} />
		</div>
	);
};

Home.propTypes = {
	counter: PropTypes.number
};

export default Home;
