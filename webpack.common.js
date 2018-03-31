const webpack = require('webpack');
const path = require('path');
const CleanWepackPlugin = require('clean-webpack-plugin');
const HtmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
	entry  : {
		index  : './src/index.js',
		another: './src/another-module.js',
	},
	output : {
		//		filename: '[name].bundle.js',
		filename: '[name].[chunkhash].js',
		path    : path.resolve(__dirname, 'dist'),
	},
	module : {
		rules: [
//			{
//				test: require.resolve('./src/index.js'),
//				use : 'imports-loader?this=>window',
//			},
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
	plugins: [
		new CleanWepackPlugin(['dist']),
		new HtmlWepackPlugin({
			title: 'Production',
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.ProvidePlugin({
			//			_: 'lodash',
			join: ['lodash', 'join'],
		}),
		//		new webpack.optimize.CommonsChunkPlugin({
		//			name: 'common',
		//		}),
	],
	// optimization配置仍不明朗
	//http://ju.outofmemory.cn/entry/343762
	//	optimization: {
	//		splitChunks: {
	//			chunks            : 'initial', // 必须三选一： "initial" | "all"(默认就是all) | "async"
	//			minSize           : 0, // 最小尺寸，默认0
	//			minChunks         : 1, // 最小 chunk ，默认1
	//			maxAsyncRequests  : 1, // 最大异步请求数， 默认1
	//			maxInitialRequests: 1, // 最大初始化请求书，默认1
	//			name              : function() {}, // 名称，此选项可接收 function
	//			cacheGroups       : { // 这里开始设置缓存的 chunks
	//				priority: 0, // 缓存组优先级
	//				vendor  : { // key 为entry中定义的 入口名称
	//					chunks            : 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
	//					test              : /react|lodash/, // 正则规则验证，如果符合就提取 chunk
	//					name              : 'vendor', // 要缓存的 分隔出来的 chunk 名称
	//					minSize           : 0,
	//					minChunks         : 1,
	//					enforce           : true,
	//					maxAsyncRequests  : 1, // 最大异步请求数， 默认1
	//					maxInitialRequests: 1, // 最大初始化请求书，默认1
	//					reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
	//				},
	//			},
	//		},
	//	},
};

