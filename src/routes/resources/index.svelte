<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/resources');

		if (res.ok) {
			const resources = await res.json();

			return {
				props: { resources }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let resources;

	import ResourceItem from '$lib/ResourceItem/index.svelte';
</script>

<svelte:head>
	<title>Resources</title>
</svelte:head>

<div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
	{#each resources.resources as resource}
		<ResourceItem {...resource} />
	{/each}
</div>
