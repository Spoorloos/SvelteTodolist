import { writable } from 'svelte/store';

const todoList = writable(
    JSON.parse(localStorage.getItem('todolist') ?? "[]")
);

todoList.subscribe(value => {
    localStorage.setItem('todolist', JSON.stringify(value));
});

export default todoList;