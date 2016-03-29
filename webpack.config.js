var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

var config = {
	entry: PATHS.app,
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	resolve: {
		extentions: ['', 'js', 'jsx']
	},
	module: {
		loaders: [
			// Babel loader (for ES2015 and JSX)
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {presets: ['stage-0', 'es2015', 'react']}
			},
			// CSS and Style loader
			{
				test: /\.css$/,
				include: PATHS.app,
				loader: "style-loader!css-loader"
			},
  		{ 
  			test: /\.less$/, 
  			loader: "style-loader!css-loader!less-loader" 
  		},
  		{ 
  			test: /\.gif$/, 
  			loader: "url-loader?mimetype=image/gif" 
  		},
  		{ 
  			test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, 
  			loader: "url-loader?mimetype=application/font-woff" 
  		},
  		{ 
  			test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, 
  			loader: "file-loader?name=[name].[ext]" 
  		}
		]
	},
	plugins: [
		// new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Task Scheduler'
		}),
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	]
};

if (TARGET === 'start' || !TARGET) {
	config = merge(config, {
		devtool: 'eval-source-map',
		devServer: {
			historyApiFallback: true,
			hot: true,
			inline: true,
			stats: 'errors-only',
			host: 'localhost',
			port: '9000'
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
}

module.exports = config;
