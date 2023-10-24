import { writable } from 'svelte/store';

const TodoList = writable(
	JSON.parse(localStorage.getItem('todolist')) ?? []
);

TodoList.subscribe(value => {
	localStorage.setItem('todolist', JSON.stringify(value));
});

export default TodoList;