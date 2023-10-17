module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{js,jpg,scss}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};