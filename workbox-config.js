module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{cjs,js,html,json,svg,md,css,tsx,ts}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^source/,
		/^promo/,
		/^ref/
	]
};