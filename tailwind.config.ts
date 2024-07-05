import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#ffff', 600: '#9c00d7', 900: '#490f64', 950: '#321244' };
const gray = { 100: '#faf3ff', 200: '#f5e8fe', 300: '#ffff', 400: '#fffff', 500: '#664b79', 700: '#ffff', 800: 'rgba(0, 0, 0, 0.212)', 900: 'rgba(0, 0, 0, 0.192)' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};