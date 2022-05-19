<script>
	export let title;
	export let description;
    export let file;
    export let lang;
</script>

<div class="my-4 card lg:card-side max-w-3xl shadow">
	<div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p><strong>N. B. This is written in {lang}</strong></p>
		<p>{description}</p>
		<div class="card-action mt-6">
			<a class="btn btn-primary" href="/content/{file}" target="blank" rel="external">Read More</a>
		</div>
	</div>
</div>
