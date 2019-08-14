const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        homepage: './src/homepage/js/index.js',
        blogs: './src/blogs/js/index.js',
        about_me: './src/about-me/js/index.js',
        contact_me: './src/contact-me/js/index.js'
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
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['about_me'],
            filename: 'about_me/index.html',
            template: './src/about-me/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['contact_me'],
            filename: 'contact_me/index.html',
            template: './src/contact-me/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [  'style-loader', 'css-loader']
            },
            {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000' }]
    }
}