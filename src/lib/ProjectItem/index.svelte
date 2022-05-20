<script>
	export let name;
	export let description;
	export let html_url;
	export let fork;
	export let topics
</script>

<div class="my-4 card lg:card-side max-w-3xl shadow overflow-visible">
	<div class="card-body">
		<div class="flex flex-row justify-between">
			<div class="md:block">
				<h2 class="card-title">{name}</h2>
				{#if description}
					<p>{description}</p>
				{/if}
			</div>
			{#if fork}
				<div 
				class="tooltip"
				data-tip="This is a forked repo">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="12" cy="18" r="2" />
						<circle cx="7" cy="6" r="2" /> <circle cx="17" cy="6" r="2" />
						<path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
						<line x1="12" y1="12" x2="12" y2="16" />
					</svg>
				</div>
			{/if}
		</div>
		<div class="flex flex-col justify-between content-start mt-auto">
			<div id="topics" class="flex-1 mt-6 mb-3">
				{#each topics as topic}
					<p class="badge badge-primary mx-1">{topic}</p>
				{/each}
			</div>
			<div class="flex-1 card-action">
				<a class="btn btn-primary" href={html_url} target="_blank">View</a>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		min-width: 350px;
	}
</style>
