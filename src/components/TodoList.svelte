<script>
	import TodoList from '../stores/TodoList.js';
	import ListItem from './ListItem.svelte';

	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	function removeButtonClick(index) {
		TodoList.update(list => list.filter((_, i) => i !== index));
	}

	function moveItemClick(oldIndex, newIndex) {
		TodoList.update(list => {
			if (list[newIndex]) {
				[ list[oldIndex], list[newIndex] ] = [ list[newIndex], list[oldIndex] ];
			}
			return list;
		});
	}
</script>

<div class="todo-list">
	{#each $TodoList as task, index (task)}
		<div animate:flip={{ duration: 250 }}>
			<ListItem
				{ task } { index }
				on:up={ () => moveItemClick(index, index - 1) }
				on:down={ () => moveItemClick(index, index + 1) }
				on:remove={ () => removeButtonClick(index) }/>
		</div>
	{:else}
		<strong in:scale>Your todolist is empty.</strong>
	{/each}
</div>

<style>
	.todo-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 20px;
	}
</style>