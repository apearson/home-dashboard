/* Libraries */
const path    = require('path');
const webpack = require('webpack');

module.exports = {
		entry: './src/main.tsx',

		output: {
			path: path.join(__dirname, './dist'),
			filename: 'bundle.js',
		},

		devtool: 'source-map',
		devServer:{
			publicPath: "/dist/",
			compress: true,
			port: 9000,
			open: true,
			historyApiFallback: true,
			overlay: true,
			inline: true,
		},

		resolve: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
		},

		module: {
				rules: [
						{ test: /\.tsx?$/, include: /ClientApp/, loader: 'awesome-typescript-loader' },
						{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
				]
		},
};