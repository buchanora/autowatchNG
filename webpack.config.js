var config = {
    entry: [
        './app/main.js',
        'webpack/hot/dev-server'
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
                loader: 'js-hint-loader'
            }
        ],
        loaders:[
            {
                test: [/\.es6$/, /\.js$/],                
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }               
            },
            {
                test: [/\.scss$/],
                loader: 'style!css!sass',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './public',
        inline: true,
        hot: true
    },
    resolve: {
        extensions:['', '.js', '.es6', 'json']
    }
}

module.exports = config;