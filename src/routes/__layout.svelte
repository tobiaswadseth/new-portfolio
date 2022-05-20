<script>
	import '../app.css';
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import Container from '$lib/Container/index.svelte';
</script>

<Container>
	<Header />
	<main class="px-12 w-full grid place-items-center">
		<slot />
	</main>
	<Footer />
</Container>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
