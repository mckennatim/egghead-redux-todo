??because this is a current function and it needs to be called twice

## tags 


### 1-actions-reducers-components
#### adding hot reloading
    npm install --save-dev webpack-dev-server

add to webpack.config.js

       devServer: {
        contentBase: './dist'
      }    
run

    webpack-dev-server --port=4445
add

    npm install --save-dev react-hot-loader
change webpack.config.js to

    var webpack = require('webpack');
    module.exports = {
      entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
      ],
      module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'react-hot!babel'
        }]
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
      },
      devServer: {
        contentBase: './dist',
        hot: true
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
    };

      // loaders: ['babel?presets[]=react,presets[]=es2015'],
      // include: __dirname

### 0-one-file
with tests and comment headers breaking code into sections. Added npm, babel and webpack.