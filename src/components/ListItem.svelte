<script>
	import TodoList from "../stores/TodoList";
	import { createEventDispatcher } from "svelte";
	import { slide, scale, crossfade } from "svelte/transition";

	export let task, index;

	const dispatch = createEventDispatcher();
	const [send, receive] = crossfade({ fallback: scale });

	let mouseIsOver = false;
</script>

<div
	id="list-item"
	on:mouseenter={() => (mouseIsOver = true)}
	on:mouseleave={() => (mouseIsOver = false)}
	in:receive={{ key: task }}
	out:send={{ key: task }}
>
	<h3>{index + 1}. {task}</h3>

	{#if mouseIsOver}
		<div id="item-buttons" transition:slide>
			<div id="priority-buttons">
				<button disabled={ index === 0 } on:click={() => dispatch("up")}>▲</button>
				<button disabled={ index === $TodoList.length - 1 } on:click={() => dispatch("down")}>▼</button>
			</div>
			<button id="remove-button" on:click={() => dispatch("remove")}>Remove</button>
		</div>
	{/if}
</div>

<style>
	#list-item {
		border-left: thick solid #ee5057;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.1);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
		padding: 5px;
		text-align: left;
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
	}

	#item-buttons {
		display: flex;
		justify-content: space-between;
		background: none;
		margin-top: 10px;
	}

	#remove-button {
		background-color: #ee5057;
		font-weight: bold;
	}

	#priority-buttons {
		user-select: none;
	}

	#priority-buttons > :first-child {
		border-radius: 10px 0 0 10px;
	}

	#priority-buttons > :last-child {
		border-radius: 0 10px 10px 0;
	}
</style>
