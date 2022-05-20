module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: false
	}
};
