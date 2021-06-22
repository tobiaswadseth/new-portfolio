<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/store');

		if (res.ok) {
			const products = await res.json();

			return {
				props: { products }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let products;

	import StoreItem from '$lib/StoreItem/index.svelte';
</script>

{#each products.products as product}
	<StoreItem {...product} />
{/each}
