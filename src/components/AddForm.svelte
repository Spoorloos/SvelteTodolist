<script>
	import { slide } from 'svelte/transition';
	import TodoList from '../stores/TodoList.js';

	let value;
	let addError;

	function addFormSubmit(event) {
		const trimmedValue = value.trim();
		if (trimmedValue.length === 0) {
			addError = 'Please enter a task';
		} else if ($TodoList.includes(trimmedValue)) {
			addError = 'Task is already in the todolist.';
		} else {
			$TodoList.push(trimmedValue);
			$TodoList = $TodoList;
			event.target.reset();
		}
	}
</script>

<form on:submit|preventDefault={ addFormSubmit }>
	<input
		enterkeyhint="done"
		placeholder="Add tasks to the todolist..."
		on:input={ () => addError = null }
		bind:value/>

	{#if addError}
		<strong transition:slide>{ addError }</strong>
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

	strong {
		display: block;
		margin-top: 20px;
		color: #EE5057;
	}
</style>