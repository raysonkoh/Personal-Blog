const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        homepage: './src/homepage/js/index.js',
        blogs: './src/blogs/js/index.js',
        about_me: './src/about-me/js/index.js',
        contact_me: './src/contact-me/js/index.js',
        blog_cache: './src/blogs/blog-cache/js/index.js'
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
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['blog_cache'],
            filename: 'blog_cache/sd-wan.html',
            template: './src/blogs/blog-cache/sd-wan.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['blog_cache'],
            filename: 'blog_cache/update-july-2019.html',
            template: './src/blogs/blog-cache/update-july-2019.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['blog_cache'],
            filename: 'blog_cache/non-stop-learning.html',
            template: './src/blogs/blog-cache/non-stop-learning.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['blog_cache'],
            filename: 'blog_cache/end-of-atec.html',
            template: './src/blogs/blog-cache/end-of-atec.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['blog_cache'],
            filename: 'blog_cache/year-review.html',
            template: './src/blogs/blog-cache/year-review.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['blog_cache'],
            filename: 'blog_cache/morals.html',
            template: './src/blogs/blog-cache/morals.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [  'style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000' 
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loader:'file-loader'
            // },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
}