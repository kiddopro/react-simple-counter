import React from "react";
import Number from "./number";
import IconCounter from "./icon";
import PropTypes from "prop-types";

//creamos las variables para tener un control del contador en cada sección
let cont2 = 0,
	cont3 = 0,
	cont4 = 0,
	cont5 = 0,
	cont6 = 0;

const CounterContainer = props => {
	//verificamos que ninguna variable se pase del valor 9 y que sume uno a la siguiente cuando su predecesora llega a 9
	cont2 =
		props.counter == 9 ? (cont2 += 1) : cont2 == 9 ? (cont2 = 0) : cont2;
	cont3 = cont2 == 9 ? (cont3 += 1) : cont3 == 9 ? (cont3 = 0) : cont3;
	cont4 = cont3 == 9 ? (cont4 += 1) : cont4 == 9 ? (cont4 = 0) : cont4;
	cont5 = cont4 == 9 ? (cont5 += 1) : cont5 == 9 ? (cont5 = 0) : cont5;
	cont6 = cont5 == 9 ? (cont6 += 1) : cont6 == 9 ? (cont6 = 0) : cont6;
	return (
		//pongo width 100% porque la fila va a ocupar todo el ancho permitido por su contenedor padre
		<div className="row flex-nowrap" style={{ width: "100%" }}>
			<IconCounter />
			<Number counter={cont6} />
			<Number counter={cont5} />
			<Number counter={cont4} />
			<Number counter={cont3} />
			<Number counter={cont2} />
			<Number counter={props.counter} />
		</div>
	);
};

CounterContainer.propTypes = {
	counter: PropTypes.number
};

export default CounterContainer;
