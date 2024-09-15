/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		{
			pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10)/,
		},
	],
}
