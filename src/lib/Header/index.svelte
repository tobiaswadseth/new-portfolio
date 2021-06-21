<script>
	const toggleUserInfo = () => {
		console.log(`User info`);
	};
	const toggleNotifications = () => {
		console.log(`Notifications`);
	};
</script>

<header class="p-2 sticky top-0 z-50">
	<div class="navbar bg-neutral text-neutral-content rounded-box">
		<div class="dropdown">
			<div tabindex="0" class="px-2 mx-2 my-1 md:hidden">
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
					<li class="text-neutral">
						<a href="/blog">Blog</a>
					</li>
					<!-- <li class="text-neutral">
						<a href="/store">Store</a>
					</li> -->
				</ul>
			</div>
		</div>
		<div class="flex-1 px-2 mx-2 md:flex-none">
			<a class="btn btn-ghost btn-md rounded-btn" sveltekit:prefetch href="/">
				<span class="text-lg font-bold"> Tobias Wadseth </span>
			</a>
		</div>
		<div class="flex-1 px-2 mx-2">
			<div class="items-stretch hidden md:flex">
				<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/blog"> Blog </a>
				<!-- <a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/store"> Store </a> -->
			</div>
		</div>
		<div class="flex-none">
			<button class="btn btn-square btn-ghost" on:click={toggleNotifications}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
			</button>
		</div>
		<div class="flex-none">
			<button class="btn btn-square btn-ghost" on:click={toggleUserInfo}>
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
			</button>
		</div>
	</div>
</header>
