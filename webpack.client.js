const path = require('path');
const webConfig = require('./webConfig');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  // production || development
  mode: webConfig.environment,

  // Tell webpack the root file of our
  // server application 
  entry: ['./src/client.js', './src/assets/scss/styles.scss'],

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].min.css',
              outputPath: 'assets/css/'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/assets/graphics', to: 'assets/graphics' },
      { from: 'src/assets/email_templates', to: 'assets/email_templates' }
    ])
  ]

};


