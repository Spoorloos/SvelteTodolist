<script>
	import AddForm from './components/AddForm.svelte';
	import TodoList from './components/TodoList.svelte';
</script>

<main>
	<AddForm/>
	<TodoList/>
</main>

<style>
	main {
		box-sizing: border-box;
		position: absolute;
		transform: translate(-50%, 0);
		left: 50%;
		width: 30vw;
		text-align: center;
		color: white;
	}

	@media screen and (max-width: 1200px) {
		main {
			width: 50vw;
		}
	}

	@media screen and (max-width: 640px) {
		main {
			width: 100vw;
			padding: 0 10px 0px 10px;
		}
	}
</style>