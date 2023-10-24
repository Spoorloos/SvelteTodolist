<script>
    import { fade } from 'svelte/transition';
    import todoList from '../stores/TodoList.js';
    
    let addError;

    function addFormSubmit({ target }) {
        todoList.update(list => {
			const value = target[0].value;
			if (!list.includes(value)) {
				list.push(value);
				target.reset();
			} else {
				addError = 'Task is already in the todolist.';
			}
			return list;
		});
    }
</script>

<form on:submit|preventDefault={ addFormSubmit }>
	{#if addError}
		<p class="error-message" transition:fade={{ duration: 100 }}>{ addError }</p>
	{/if}

    <input
        required
        placeholder="Add tasks to the todolist..."
        on:input={ () => addError = undefined }/>
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