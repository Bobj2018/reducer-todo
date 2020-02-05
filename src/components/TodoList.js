import React, { useReducer } from 'react';
import Todo from './Todo';
import { ListGroup } from 'reactstrap';

import { initialState, todoReducer } from './../reducers/index';
import TodoForm from './TodoForm';

const TodoList = () => {
	const [ state, dispatch ] = useReducer(todoReducer, initialState);

	return (
		<ListGroup>
			{state.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)}
			<TodoForm dispatch={dispatch} />
		</ListGroup>
	);
};

export default TodoList;
