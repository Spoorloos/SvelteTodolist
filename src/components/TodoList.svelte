<script>
	import { scale } from 'svelte/transition';
    import todoList from '../stores/TodoList.js';

	let transRunning = 0;

    function removeButtonClick(index) {
		todoList.update(list => list.filter((_, idx) => idx !== index));
	}

	function moveItemClick(oldIndex, newIndex) {
		todoList.update(list => {
			if (list[newIndex]) {
				[ list[oldIndex], list[newIndex] ] = [ list[newIndex], list[oldIndex] ];
			}
			return list;
		});
	}
</script>

<ul>
    {#each $todoList as item, index}
		<li 
			transition:scale 
			on:outroend={ () => transRunning-- }
			on:introstart={ () => transRunning++ }>

			<span class="item-text">{item}</span>
			<div class="item-buttons">
				<div>
					<button on:click={ () => moveItemClick(index, index - 1) }>▲</button>
					<button on:click={ () => moveItemClick(index, index + 1) }>▼</button>
				</div>
				<button class="remove-button" on:click={ () => removeButtonClick(index) }>Remove</button>
			</div>
		</li>
    {:else}
		{#if transRunning < 1}
			<p in:scale>Your todolist is empty.</p>
		{/if}
    {/each}
</ul>

<style>
    ul {
		list-style-type: none;
		padding-left: 0;
	}

    li {
		margin-top: 10px;
		border-left: thick solid #EE5057;
		border-radius: 10px;
		background-color: rgba(0,0,0,0.1);
		box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
		padding: 5px;
		text-align: left;
	}

	button {
		border-radius: 10px;
		background-color: rgba(255,255,255,0.05);
		box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
		border: none;
		color: white;
	}

	.item-text {
		font-weight: bold;
		box-shadow: none;
		color: white;
		word-wrap: normal;
	}

	.item-buttons {
		display: flex;
		justify-content: space-between;
		background: none;
		margin-top: 10px;
	}

	.remove-button {
		background-color: #EE5057;
		font-weight: bold;
		color: white;
	}

	p {
		font-weight: bold;
	}
</style>