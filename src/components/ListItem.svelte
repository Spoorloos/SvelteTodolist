<script>
	import TodoList from "../stores/TodoList";
	import { createEventDispatcher } from "svelte";
	import { slide, scale, crossfade } from "svelte/transition";

	export let task, index;

	const dispatch = createEventDispatcher();
	const [ send, receive ] = crossfade({ fallback: scale });

	let mouseIsOver = false;
</script>

<div
	class="list-item"
	class:completed={ task.completed }
	on:mouseenter={ () => mouseIsOver = true }
	on:mouseleave={ () => mouseIsOver = false }
	in:receive={{ key: task.id }}
	out:send={{ key: task.id }}
>
	<h3>{index + 1}. {task.name}</h3>

	{#if mouseIsOver}
		<div class="item-buttons" transition:slide>
			<div class="priority-buttons">
				<button
					disabled={ index === 0 }
					on:click={ () => dispatch("up") }
				>▲</button>

				<button
					disabled={ index === $TodoList.length - 1 }
					on:click={ () => dispatch("down") }
				>▼</button>
			</div>

			<div>
				<button 
					class="complete-button"
					disabled={ task.completed }
					on:click={ () => { task.completed = true; $TodoList = $TodoList; }}
				>Complete</button>

				<button
					class="remove-button"
					on:click={ () => dispatch("remove") }
				>Remove</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.list-item {
		border-left: thick solid #50ee75;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.1);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
		padding: 5px;
		text-align: left;
	}

	.completed {
		border-left: thick solid #509aee;
	}

	h3 {
		font-weight: bold;
		color: white;
		word-wrap: normal;
		margin: 0;
	}

	button {
		border-radius: 10px;
		border: none;
		font-weight: bold;
	}

	.item-buttons {
		display: flex;
		justify-content: space-between;
		background: none;
		margin-top: 10px;
		user-select: none;
	}

	.priority-buttons > :first-child {
		border-radius: 10px 0 0 10px;
	}

	.priority-buttons > :last-child {
		border-radius: 0 10px 10px 0;
	}

	.complete-button {
		background-color: #509aee;
	}

	.remove-button {
		background-color: #ee5057;
	}
</style>