module.exports = {
	entry: {
		app: './app.js',
		index: './index.js',
		detail: './detail.js'
	},
	output: {
		path: "dist/js",
        filename: "[name].js"
	}
};