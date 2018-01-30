const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const prod_ENV = {'process.env.NODE_ENV': JSON.stringify('production')};

module.exports = {
  entry: ['./src/js/index.js', './src/assets/SCSS/App.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: "source-map",
  devServer: {
    contentBase: './dist',
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: ['babel-loader', 'eslint-loader'],
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }]
        })
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000,
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Andrew Bedziak | Portfolio",
      template: "./src/index.html",
      filename: './index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {from:'src/assets/images',to:'./assets/images'} 
    ]), 
    new ExtractTextPlugin({filename: 'style.css'}),
    new UglifyJsPlugin({
      sourceMap: true,
      output: {
        comments: false
      },
      prod_ENV
    }),
    new CompressionPlugin({
      prod_ENV
    })
  ],
};

