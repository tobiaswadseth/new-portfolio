<script context="module">
	export const load = async ({ fetch }) => {
		const resP = await fetch('/api/projects');
		const resT = await fetch('/api/projects/topics');
		
		if (resP.ok) {
			const projects = await resP.json();

			if (resT.ok) {
				const topics = await resT.json();

				return {
					props: { projects, topics }
				};
			}

			const { message } = await resT.json();
			
			return {
				error: new Error(message)
			}
		}
		
		const { message } = await resP.json();
		
		return {
			error: new Error(message)
		};



	};
</script>

<script>
	export let projects;
	export let topics;

	import ProjectItem from '$lib/ProjectItem/index.svelte';
import Error from '../__error.svelte';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<!-- TODO: topic filter -->

<div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
	{#each projects.projects as project}
		<ProjectItem {...project} />
	{/each}
</div>
