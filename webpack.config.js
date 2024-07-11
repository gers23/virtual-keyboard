const webpack = require('webpack');
const path = require('path');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    watch: !isProduction,
    entry: './src/index.js',
    output: {
      filename: 'script.js',
      path: path.join(__dirname, 'dist'),
      clean: true,
    },

    module: {
      rules: [
          { 
            test: /\.js$/,       
            exclude: /node_modules/,         
            use: {                          
                loader: 'babel-loader',                         
                options: { 
                    presets: ['@babel/preset-env']        
                },     
            }    
          },
        ]
      },
    
    plugins: [
      
    ]
  }

  return config;
}
