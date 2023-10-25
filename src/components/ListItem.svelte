<script>
    import { createEventDispatcher } from 'svelte';
	import { slide, scale, crossfade } from 'svelte/transition';

    export let task, index;

    const dispatch = createEventDispatcher();
    const [ send, receive ] = crossfade({ fallback: scale });

	let mouseIsOver = false;
</script>

<div class="list-item"
	on:mouseenter={ () => mouseIsOver = true }
	on:mouseleave={ () => mouseIsOver = false }
    in:receive={{ key: task }}
    out:send={{ key: task }}>

    <h4>{index + 1}. {task}</h4>

	{#if mouseIsOver} 
		<div class="item-buttons" transition:slide>
			<div>
				<button class="up-button" on:click={ () => dispatch('up') }>▲</button>
				<button class="down-button" on:click={ () => dispatch('down') }>▼</button>
			</div>
			<button class="remove-button" on:click={ () => dispatch('remove') }>Remove</button>
		</div>
	{/if}
</div>

<style>
    .list-item {
		margin-bottom: 10px;
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
	}

	h4 {
		font-weight: bold;
		color: white;
		word-wrap: normal;
		margin: 0;
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
	}

	.up-button {
		border-radius: 10px 0 0 10px;
	}

	.down-button {
		border-radius: 0 10px 10px 0;
	}
</style>