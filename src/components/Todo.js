import React from 'react';
import { ListGroupItem } from 'reactstrap';

import './Todo.css';

const Todo = ({ todo, dispatch }) => {
	const handleClick = e => {
		console.log('click');
		dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
	};
	return (
		<ListGroupItem className={`item${todo.completed ? ' completed' : ''} noselect`} onClick={handleClick}>
			{todo.item}
		</ListGroupItem>
	);
};

export default Todo;
