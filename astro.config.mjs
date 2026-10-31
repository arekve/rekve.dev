// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://rekve.dev',
	i18n: {
		locales: ['nn', 'en'],
		defaultLocale: 'nn',
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'nn',
				locales: { nn: 'nn', en: 'en' },
			},
		}),
	],
});
