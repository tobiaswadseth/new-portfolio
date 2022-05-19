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

{#each resources.resources as resource}
	<ResourceItem {...resource} />
{/each}
