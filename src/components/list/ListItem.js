import React from 'react';

const ListItem = props => {
	return (
		<li className="list-item">
			{props.item}{' '}
			<i
				className="fa fa-check"
				onClick={e => props.handleCompleted(props.item)}
				style={{ marginLeft: 'auto' }}
			/>
		</li>
	);
};
export default ListItem;
