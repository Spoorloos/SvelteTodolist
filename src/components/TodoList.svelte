<script>
    import { fade } from 'svelte/transition';
    import TodoList from '../stores/TodoList.js';

    function removeButtonClick(index) {
		TodoList.update(list => list.filter((_, idx) => idx !== index));
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
    {#each $TodoList as item, index}
        <li transition:fade>
            <div class="list-item">
                <input readonly class="item-text" value={item}>
                <div class="item-buttons">
                    <div>
                        <button class="selector-button" on:click={ () => moveItemClick(index, index - 1) }>▲</button>
                        <button class="selector-button" on:click={ () => moveItemClick(index, index + 1) }>▼</button>
                    </div>
                    <button class="remove-button" on:click={ () => removeButtonClick(index) }>Remove</button>
                </div>
            </div>
        </li>
    {:else}
        <p>Your todolist is empty.</p>
    {/each}
</ul>

<style>
    ul {
		list-style-type: none;
		padding-left: 0;
	}

	li {
		margin-top: 10px;
	}

	input, button {
		border-radius: 10px;
		background: none;
		box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
		border: none;
		color: white;
	}

    .list-item {
		border-left: thick solid #EE5057;
		border-radius: 10px;
		background-color: rgba(0,0,0,0.1);
		box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
		padding: 5px;
	}

	.item-text {
		width: 100%;
		font-weight: bold;
		box-shadow: none;
		margin: 5px 0 5px 0;
		color: white;
	}

	.item-buttons {
		display: flex;
		justify-content: space-between;
		background: none;
	}

	.remove-button {
		background-color: #EE5057;
		font-weight: bold;
		color: white;
	}

	.selector-button {
		background-color: rgba(255,255,255,0.05);
	}
</style>