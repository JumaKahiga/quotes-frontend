const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
		// {
		// 	test: /\.css(\.js)?$/,
		// 	exclude: /node_modules/,
		// 	use: {
		// 		loaders: ['style-loader', 'css-loader']
		// 	}

		// },
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}

		}
		]
	},
	plugins: [
	  new HtmlWebpackPlugin(
	  {
	  	template: './src/index.html'
	  })
	]
};


// module.exports = {
//   entry: {
//     index: 'src/index.js',
//   },
//   module: {
//     loaders: [{
//       test: /\.css(\.js)?$/,
//       loaders: ['style-loader', 'css-loader'],
//     }, {
//       test: /\.css\.js$/,
//       loader: 'css-js-loader',
//     }, {
//       test: /\.js$/,
//       loader: 'babel-loader',
//     }],
//   },
// };