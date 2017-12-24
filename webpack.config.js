module.exports = {
	entry: './src/App.tsx',


	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist',
		publicPath: '/dist/',
	},

	devtool: 'source-map',
	devServer:{
		port: 9000,
		inline: true,
		overlay: true,
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