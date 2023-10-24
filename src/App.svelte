<script>
	import AddForm from './components/AddForm.svelte';
	import TodoList from './components/TodoList.svelte';
</script>

<main>
	<TodoList/>
</main>
<footer>
	<AddForm/>
</footer>

<style>
	main {
		position: absolute;
        transform: translate(-50%, 0);
        left: 50%;
		width: 30vw;
		padding: 10px;
		text-align: center;
		color: white;
	}

	footer {
		position: fixed;
		transform: translate(-50%, 0);
		left: 50%;
		bottom: 50px;
		width: 35%;
		text-align: center;
	}
</style>