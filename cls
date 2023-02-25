module.exports = {
	globDirectory: 'assets/',
	globPatterns: [
		'**/*.js'
	],
	swDest: 'assets/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};