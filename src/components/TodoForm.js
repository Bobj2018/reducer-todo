import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';

const TodoForm = ({ dispatch }) => {
	const [ form, setForm ] = useState('');

	const handleChanges = e => {
		setForm(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (form) {
			dispatch({ type: 'ADD_TODO', payload: form });
			setForm('');
		}
	};

	const handleClear = e => {
		e.preventDefault();
		dispatch({ type: 'REMOVE_TODO' });
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<Input onChange={handleChanges} value={form} type='text' />
			</FormGroup>
			<ButtonGroup>
				<Button color='primary' onClick={handleSubmit}>
					Add to List
				</Button>
				<Button color='danger' onClick={handleClear}>
					Clear Completed
				</Button>
			</ButtonGroup>
		</Form>
	);
};

export default TodoForm;
