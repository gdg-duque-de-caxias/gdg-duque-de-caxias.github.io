var webpack = require('webpack');
var path = require("path");

module.exports = {
	entry:{
		app: "./src/js/app.js",
		script: "./src/js/script.js"
	},
	output: {
		path: path.resolve(__dirname, './public/js'),
		filename: "[name].output.js"
	},
	devServer: {
		contentBase: path.resolve(__dirname, './'),
	  compress: true,
	  port: 9000,
		hot: true,
		publicPath: '/'
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};
