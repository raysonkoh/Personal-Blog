const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        homepage: './src/homepage/js/index.js',
        blogs: './src/blogs/js/index.js',
    },
    output: {
        filename: '[name]/index.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['homepage'],
            filename: 'homepage/index.html',
            template: './src/homepage/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['blogs'],
            filename: 'blogs/index.html',
            template: './src/blogs/blogs.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [  'style-loader', 'css-loader']
            }
        ]
    }
}