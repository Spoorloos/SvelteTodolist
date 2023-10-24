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
		position: absolute;
		transform: translate(-50%, 0);
		left: 50%;
		width: 30vw;
		text-align: center;
		color: white;
	}
</style>