## webpack4 Getting Started
1. npm init -y
2. tnpm install --save-dev webpack@latest
- -D参数和–save-dev的作用相同
- --save production bundle -D development purposes
3. tnpm install --save-dev webpack-cli@latest
4. npm list webpack 或者 npm view webpack version 查看webpack版本
5. 通过npm的script才能webpack -v 查看版本！
6. module.exports 与 module.export 一字之差！

## webpack4 [Asset Management](https://webpack.js.org/guides/asset-management/)
1. css处理：npm install --save-dev style-loader css-loader
2. 图片处理：npm install --save-dev file-loader
3. Fonts处理:file-loader
4. Data处理:like JSON files, CSVs, TSVs, and XML.To import CSVs, TSVs, and XML you could use the csv-loader and xml-loader.
- npm install --save-dev csv-loader xml-loader


## webpack4 [Output Management](https://webpack.js.org/guides/output-management/)
1. npm install --save-dev html-webpack-plugin
2. npm install clean-webpack-plugin --save-dev
3. The Manifest

## webpack4 [Development](https://webpack.js.org/guides/development/)
1. Using source maps debug
2. automatically compile your code whenever it changes
- Using Watch Mode (The only downside is that you have to refresh your browser in order to see the changes. )
- Using webpack-dev-server
- npm install --save-dev webpack-dev-server
- Using webpack-dev-middleware ( )
- npm install --save-dev express webpack-dev-middleware

## webpack4 [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)
1. if(module.hot) 自动调试其它JS
2. Gotchas

## webpack4 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
1. sideEffects

## webpack4 [Production](https://webpack.js.org/guides/production/)
1. 

## webpack4 [Code Splitting](https://webpack.js.org/guides/code-splitting/)
1. Entry Points
- If there are any duplicated modules between entry chunks they will be included in both bundles.
- It isn't as flexible and can't be used to dynamically split code with the core application logic.
2. Prevent Duplication optimization配置失败
- webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.

## webpack4 [lazy-loading](https://webpack.js.org/guides/lazy-loading/)

