<header class="p-2 sticky top-0 z-50">
	<div class="navbar bg-neutral text-neutral-content rounded-box justify-evenly">
		<div class="dropdown">
			<div tabindex="0" class="md:hidden">
				<div class="btn btn-ghost btn-md rounded-btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</div>
				<ul class="shadow menu dropdown-content bg-base-200 rounded-box w-52">
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<a href="/store"> Store </a>
					</li>
				</ul>
			</div>
		</div>
		<div class="flex-1 md:flex-none">
			<a class="btn btn-ghost btn-md rounded-btn" sveltekit:prefetch href="/">
				<span class="text-lg font-bold"> Tobias Wadseth </span>
			</a>
		</div>
		<div class="flex-1 px-2 mx-2">
			<div class="items-stretch hidden md:flex">
				<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/blog"> Blog </a>
				<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/resources"> Resources </a>
				<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/store"> Store </a>
			</div>
		</div>
		<!-- TODO: Dropdown -->
		<div class="flex-none dropdown dropdown-end">
			<div tabindex="0">
				<div tabindex="0" class="btn btn-ghost btn-md rounded-btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
				</div>
				<ul class="shadow menu dropdown-content bg-base-200 rounded-box w-52">
					<li><a href="/profile"> Profile </a></li>
					<li><a href="/logout"> Logout </a></li>
				</ul>
			</div>
		</div>
	</div>
</header>

<style>
	.dropdown-content > li {
		@apply text-neutral;
	}
</style>
