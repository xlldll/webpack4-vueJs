const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	/*entry : './src/index.js',*/
	entry  : {
		app: './src/index.js',
		//		print:'./src/print.js',
	},
	output : {
		//		filename: 'bundle.js',
		filename  : '[name].bundle.js',
		path      : path.resolve(__dirname, 'dist'),
		//		The publicPath will be used within our server script as well in order to make sure files are served correctly on http://localhost:3000, the port number we'll specify later
		publicPath: '/',
	},
	mode   : 'production',
	module : {
		rules: [
			{
				test: /\.css$/,
				use : [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use : [
					'file-loader',
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use : [
					'file-loader',
				],
			},
			{
				test: /\.(csv|tsv)$/,
				use : [
					'csv-loader',
				],
			},
			{
				test: /\.xml$/,
				use : [
					'xml-loader',
				],
			},
		],
	},
	
	plugins  : [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Output Management',
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: './dist',
		hot        : true,
	},
	
};