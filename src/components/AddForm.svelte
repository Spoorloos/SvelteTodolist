<script>
	import { slide } from 'svelte/transition';
	import TodoList from '../stores/TodoList.js';

	let addError;

	function addFormSubmit({ target }) {
		const value = target[0].value;
		if (value.trim().length === 0) {
			addError = 'Please enter a task';
		} else {
			if ($TodoList.includes(value)) {
				addError = 'Task is already in the todolist.';
			} else {
				TodoList.set([ ...$TodoList, value ]);
				target.reset();
			}
		}
	}
</script>

<form on:submit|preventDefault={ addFormSubmit } enterkeyhint="enter">
	<input
		placeholder="Add tasks to the todolist..."
		on:input={ () => addError = null }/>

	{#if addError}
		<p class="error-message" transition:slide>{ addError }</p>
	{/if}
</form>

<style>
	input {
		width: 100%;
		border-radius: 10px;
		box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
		border: none;
		background-color: rgba(255,255,255,0.05);
		color: white;
	}

	.error-message {
		color: #EE5057;
		font-weight: 500;
	}
</style>