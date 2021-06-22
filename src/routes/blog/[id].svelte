<script context="module">
	export const load = async ({ page, fetch }) => {
		const res = await fetch(`/api/blog/${page.params.id}`);

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

<article class="prose my-6 md:my-0 lg:prose-xl">
	<h2 class="title">{post.post.title}</h2>
	<p class="">{post.post.content}</p>
</article>
