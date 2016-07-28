const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'src', 'client-render.js'),
    style: path.join(__dirname, 'src', 'scss', 'main.scss')
};

module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        root: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')],
        alias: {
            css: path.join(__dirname, 'src', 'scss')
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: path.join(__dirname, 'src')
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                include: PATHS.style,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: 'node_modules'
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 4 versions'] }) ],
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}
