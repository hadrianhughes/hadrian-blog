'use strict';

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsRule = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: [{
		loader: 'babel-loader'
	}]
};

const scssRule = {
	test: /\.scss$/,
	use: ExtractTextPlugin.extract([
		{
			loader: 'css-loader',
			options: {
				modules: true,
				importLoaders: 1,
				localIdentName: process.env.NODE_ENV === 'production' ? '[hash:base64:10]' : '[name]__[local]___[hash:base64:5]',
				sourceMap: true
			}
		},
		{
			loader: 'sass-loader'
		}
	])
};

const urlRule = {
	test: /\.(png|woff|woff2|eot|ttf|svg)$/,
	loader: 'url-loader?limit=100000'
};

const cssFileName = 'style.css';

module.exports = [
	{
		entry: path.resolve(__dirname + '/src/App.js'),
		output: {
			path: path.resolve(__dirname + '/build/public'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				jsRule,
				scssRule,
				urlRule
			]
		},
		plugins: [
			new ExtractTextPlugin(`public/${cssFileName}`)
		]
	},
	{
		entry: path.resolve(__dirname + '/src/server'),
		target: 'node',
		node: {
			__dirname: false,
			__filename: false
		},
		externals: [nodeExternals()],
		output: {
			path: path.resolve(__dirname + '/build'),
			filename: 'server.js'
		},
		module: {
			rules: [
				jsRule,
				scssRule,
				urlRule
			]
		},
		plugins: [
			new ExtractTextPlugin(`public/${cssFileName}`)
		]
	}
]
