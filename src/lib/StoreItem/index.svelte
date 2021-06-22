<script>
	export let id;
	export let name;
	export let shortDescription;
	export let downloads;
	export let createdAt;
	export let updatedAt;
</script>

<div class="my-4 card lg:card-side max-w-3xl shadow">
	<div class="card-body">
		<div class="flex flex-row justify-between">
			<div class="left md:block">
				<h2 class="card-title">{name}</h2>
				<p>{shortDescription}</p>
			</div>
			<div class="right">
				<p>Created at: {createdAt.split(' ')[0]}</p>
				<p>Updated at: {updatedAt.split(' ')[0]}</p>
			</div>
		</div>
		<div class="flex flex-row justify-between content-start mt-6">
			<div class="flex-1 card-action">
				<a class="btn btn-primary" sveltekit:prefetch href="store/{id}">View</a>
			</div>
			<div class="flex-1 stats">
				<p class="downloads">Downloads: {downloads}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.right p {
		@apply text-gray-400;
		@apply text-right;
	}

	/* .left p,
	.right p {
		@apply hidden;
	}

	@media (min-width: 768px) {
		.left p,
		.right p {
			display: block;
		}
	} */

	.stats {
		@apply relative;
	}
	.downloads {
		@apply absolute;
		@apply bottom-0;
		@apply right-0;
	}
</style>
