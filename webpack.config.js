/* Libraries */
const path = require('path');

/* Webpack config */
module.exports = {
	entry: './src/App.tsx',


	output: {
		filename: 'bundle.js',
		path: path.resolve('public', 'dist'),
		publicPath: '/dist/',
	},

	devtool: 'source-map',
	devServer:{
		contentBase: path.resolve('public'),
		watchContentBase: true,
		host: '0.0.0.0',
		open: true,
		historyApiFallback: true,
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
			{ test: /\.css$/,  loader: 'style-loader!css-loader' },
			{ test: /\.svg$/,  loader: 'svg-inline-loader' },
			{ enforce: 'pre',  loader: 'source-map-loader', test: /\.js$/, }
		]
	},

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},
};