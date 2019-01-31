import React from 'react';

const Input = props => {
	return (
		<input
			type="text"
			value={props.input}
			onChange={props.handleChange}
			className="to-do__input"
			placeholder="Add item in todo"
		/>
	);
};
export default Input;
