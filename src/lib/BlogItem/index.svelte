<script>
	export let id;
	export let title;
	export let excerpt;
</script>

<div class="my-4 card lg:card-side max-w-3xl shadow">
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{excerpt}</p>
		<div class="card-action mt-6">
			<a class="btn btn-primary" sveltekit:prefetch href="blog/{id}">Read More</a>
		</div>
	</div>
</div>
