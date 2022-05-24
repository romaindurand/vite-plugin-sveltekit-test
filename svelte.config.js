import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { svelte } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			plugins: [svelte({
				experimental: {
					inspector: true
				}
			})]
		}
	}
};

export default config;
