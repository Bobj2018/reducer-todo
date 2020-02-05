import uuid from 'uuid';
export const initialState = [
	{
		item      : 'Learn about reducers',
		completed : false,
		id        : uuid.v4()
	}
];

export const todoReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					item      : action.payload,
					completed : false,
					id        : uuid.v4()
				}
			];
		case 'REMOVE_TODO':
			return state.filter(todo => !todo.completed);
		case 'TOGGLE_TODO':
			return state.map(todo => {
				if (todo.id === action.payload) {
					console.log(todo);
					return {
						...todo,
						completed : !todo.completed
					};
				}
				return todo;
			});

		default:
			return state;
	}
};
