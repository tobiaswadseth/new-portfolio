<script context="module">
	export const load = async ({ page }) => {
		const res = await fetch(`/api/blog/${page.params.id}`);

		console.log('post page');

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

<h1>{post.post.title}</h1>
<div class="">{post.post.content}</div>
