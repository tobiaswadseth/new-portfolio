module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		themes: false
	}
};
