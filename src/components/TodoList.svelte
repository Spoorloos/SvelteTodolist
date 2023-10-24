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

<ul>
	{#each $TodoList as task, index (task)}
		<div animate:flip={{ duration: 250 }}>
			<ListItem { task }
				on:up={ () => moveItemClick(index, index - 1) }
				on:down={ () => moveItemClick(index, index + 1) }
				on:remove={ () => removeButtonClick(index) }/>
		</div>
	{:else}
		<p in:scale>Your todolist is empty.</p>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		padding-left: 0;
	}

	p {
		font-weight: bold;
	}
</style>