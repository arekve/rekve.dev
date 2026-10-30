// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://rekve.dev',
	i18n: {
		locales: ['nn', 'en'],
		defaultLocale: 'nn',
	},
});
