import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

var config = {
    entry: [
            './app/main.js',
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client'
           ],
    output: {
        path: './public/js',
        publicPath: 'http://localhost:3000/scripts/',
        filename: 'bundle.js'
    },
    module: {
        preloaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'js-hint-loader'
            }
        ],
        loaders: [
            {
                test: [/\.es6$/, /\.js$/],                
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/     
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: 'style!css?sourceMap!postcss!sass?sourceMap'
                })
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
    resolve: {
        extensions:['', '.js', '.es6', '.json', '.scss']
    },
    target: 'web',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('./public/css/bundle.css')
    ],
    reload: true
}

module.exports = config;