import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TodoList from './components/TodoList';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Task List</h1>
				<TodoList />
			</header>
		</div>
	);
}

export default App;
