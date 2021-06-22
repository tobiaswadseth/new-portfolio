<script context="module">
	export const load = ({ error, status }) => {
		return {
			props: {
				status,
				message: error.message
			}
		};
	};
</script>

<script>
	export let status;
	export let message;
</script>

<h1 class="text-5xl font-bold">{status}</h1>
<p class="my-4">{message}</p>
<a href="/" class="btn btn-primary "
	><svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6 mr-2"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M10 19l-7-7m0 0l7-7m-7 7h18"
		/>
	</svg> Go Home</a
>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
