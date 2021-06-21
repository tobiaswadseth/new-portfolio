module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	plugins: [require('daisyui')],
	daisyui: {
		themes: false
	}
};
