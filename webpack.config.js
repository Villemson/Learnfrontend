const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let pages = [];
for(let i = 0; i<10;i++){
    pages.push(new HtmlWebpackPlugin({
        filename: i+'.html',
        template: './src/index.html'
    }));
}


module.exports = {
    //   mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/index.html'
        }),
        ...pages //pages[0], pages[1], ... 
    ],
};
