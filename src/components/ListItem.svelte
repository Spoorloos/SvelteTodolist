<script>
    import { createEventDispatcher } from 'svelte';
	import { scale, crossfade } from 'svelte/transition';

    const dispatch = createEventDispatcher();
    const [ send, receive ] = crossfade({ fallback: scale });

    export let task;
</script>

<li
    in:receive={{ key: task }}
    out:send={{ key: task }}>

    <span>{task}</span>
    <div class="item-buttons">
        <div>
            <button class="up-button" on:click={ () => dispatch('up') }>▲</button>
            <button class="down-button" on:click={ () => dispatch('down') }>▼</button>
        </div>
        <button class="remove-button" on:click={ () => dispatch('remove') }>Remove</button>
    </div>
</li>

<style>
    li {
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

	span {
		font-weight: bold;
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
	}

	.up-button {
		border-radius: 10px 0 0 10px;
	}

	.down-button {
		border-radius: 0 10px 10px 0;
	}
</style>