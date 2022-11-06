const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    'index': './js/index.js',
    'index2': './js/index2.js',
    'index3': './js/index3.js',
    'index4': './js/index4.js',
    'index5': './js/index5.js',
    'index6': './js/index6.js',
    'index7': './js/index7.js',
    'index8': './js/index8.js',
    'index9': './js/index9.js',
    'index10': './js/index10.js',
    'index11': './js/index11.js',
    'index12': './js/index12.js',
    'index13': './js/index13.js',
    'index-intro': './js/main.js'


  },  

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },

      {
        test: /\.html$/,
        loader: 'html-loader'
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          esModule: false
        }
      },

      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      },

      {
        test: /\.glsl$/,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      }
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
    stats: 'errors-only'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks: ['index'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index2.html',
      template: 'index2.html',
      inject: true,
      chunks: ['index2'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index3.html',
      template: 'index3.html',
      inject: true,
      chunks: ['index3'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index4.html',
      template: 'index4.html',
      inject: true,
      chunks: ['index4'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index5.html',
      template: 'index5.html',
      inject: true,
      chunks: ['index5'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index6.html',
      template: 'index6.html',
      inject: true,
      chunks: ['index6'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index7.html',
      template: 'index7.html',
      inject: true,
      chunks: ['index7'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index8.html',
      template: 'index8.html',
      inject: true,
      chunks: ['index8'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index9.html',
      template: 'index9.html',
      inject: true,
      chunks: ['index9'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index10.html',
      template: 'index10.html',
      inject: true,
      chunks: ['index10'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index11.html',
      template: 'index11.html',
      inject: true,
      chunks: ['index11'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index12.html',
      template: 'index12.html',
      inject: true,
      chunks: ['index12'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index13.html',
      template: 'index13.html',
      inject: true,
      chunks: ['index12'],
      hash: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index-intro.html',
      template: 'index-intro.html',
      inject: true,
      chunks: ['index-intro'],
      hash: true,
    }),

    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
      chunkFilename: "[id].css"
    }),
  ]
};