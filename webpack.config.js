var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var config = {
    entry: [
        './app/main.jsx',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output:{
        path: './public/js',
        publicPath: 'http://localhost:8080/scripts/',
        filename: 'bundle.js'
    },
    module:{
        preloaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'js-hint'
            }
        ],
        loaders:[
            {
                test: [/\.es6$/, /\.js$/, /\.jsx$/],                
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,              
            },
            
            {
                test: [/\.scss$/],
                loader: 'style!css?sourceMap!postcss!sass?sourceMap',
                exclude: /node_modules/
            },
            {
                test: [/\.css$/],
                loader: ExtractTextPlugin.extract('style'),
                exclude: /node_modules/
            }
        ]
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions','ie >= 9', 'and_chr >= 2.3']})],
    sassLoader: {
        includePaths: ['./node_modules/foundation-sites/scss', 
                       './node_modules/foundation-sites/vendor', 
                       './node_modules/motion-ui'
                      ]
    },
    devServer: {
        contentBase: './public',
        inline: true,
        hot: true
    },
    resolve: {
        extensions:['', '.js', '.es6', '.jsx', '.json', '.scss']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('./public/css/bundle.css')
    ],
    target: 'web',
    reload: true
}

module.exports = config;