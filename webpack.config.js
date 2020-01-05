const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'frontend/src/js/index.js'),
		style: path.resolve(__dirname, 'frontend/src/scss/app.scss'),
		material: path.resolve(__dirname, 'frontend/src/js/material.js')
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'frontend/dist')
	},
	resolve: {
		extensions: ['.vue', '*', '.js'],
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader?-url',
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: './postcss.config.js'
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: ['./node_modules']
							}
						}
					}
				],
			}
		]
	},
};