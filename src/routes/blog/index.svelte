<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/blog');

		if (res.ok) {
			const posts = await res.json();

			return {
				props: { posts }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let posts;

	import BlogItem from '$lib/BlogItem/index.svelte';
</script>

{#each posts.posts as post}
	<BlogItem {...post} />
{/each}
