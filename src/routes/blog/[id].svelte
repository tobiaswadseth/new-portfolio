<script context="module">
	export const load = async ({ params, fetch }) => {
		const res = await fetch(`/api/blog/${params.id}`);

		if (res.ok) {
			const post = await res.json();

			return {
				props: { post }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>{post.post.title}</title>
</svelte:head>

<article class="prose my-6 md:my-0 lg:prose-xl">
	<h2 class="title">{post.post.title}</h2>
	<p class="">{post.post.content}</p>
</article>
