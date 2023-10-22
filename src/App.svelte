<script>
	import AddForm from './components/AddForm.svelte';
	import TodoList from './components/TodoList.svelte';
</script>

<header>
	<h2>Todolist</h2>
</header>
<main>
	<TodoList/>
</main>
<footer>
	<AddForm/>
</footer>

<style>
	header {
		text-align: center;
		background-color: rgba(35,35,35,0.5);
		padding: 10px;
	}

	h2 {
		color: white;
		margin: 0;
	}

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