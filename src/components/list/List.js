import React from 'react';
import ListItem from './ListItem';

const List = props => {
	return (
		<ul className="list">
			{props.items.map(item => (
				<ListItem
					key={item}
					item={item}
					handleCompleted={props.handleCompleted}
				/>
			))}
		</ul>
	);
};
export default List;
