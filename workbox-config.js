module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};