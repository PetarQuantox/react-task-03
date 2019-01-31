import React from 'react';

const Button = props => (
	<button onClick={props.handleClick} className="btn">
		Add item
	</button>
);
export default Button;
