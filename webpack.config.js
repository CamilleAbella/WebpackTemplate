
const {CleanWebpackPlugin:CLEAN} = require('clean-webpack-plugin')
const HTML = require('html-webpack-plugin')
const path = require('path')

const load = name => name + '-loader'

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new CLEAN(),
        new HTML({
            title: 'Webpack Teaching',
            template: './src/home.ejs'
        })
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    { loader: load('style'),    options: { injectType: 'linkTag' } },
                    { loader: load('file'),     options: {  } }
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    { loader: load('style'),    options: { injectType: 'linkTag' } },
                    { loader: load('file'),     options: { name: '[contenthash].css' } },
                    { loader: load('sass'),     options: {  } }
                ]
            }
        ]
    }
}