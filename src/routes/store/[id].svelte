<script context="module">
	export const load = async ({ page, fetch }) => {
		const res = await fetch(`/api/store/${page.params.id}`);

		if (res.ok) {
			const product = await res.json();

			return {
				props: { product }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let product;

	let loggedIn = true;
	let own = true;
</script>

<h1>{product.product.name}</h1>
<button class="btn" data-action={own ? 'download' : 'buy'} class:own disabled={!loggedIn}
	>{loggedIn
		? own
			? 'Download ' + product.product.fileName
			: 'Buy ' + product.product.fileName
		: 'Download ' + product.product.fileName}</button
>
<p>Downloads: {product.product.downloads}</p>
<div>{product.product.description}</div>

<style>
	[data-action='download'] {
		@apply btn-success;
	}
	[data-action='buy'] {
		@apply btn-warning;
	}
</style>
