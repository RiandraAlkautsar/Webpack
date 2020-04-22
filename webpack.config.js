const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 


module.exports = env => {
    return{
    mode: env,
    devServer: {
        contentBase: path.resolve(__dirname, 'bundle'),
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'bundle'),
        filename:'bundle.js',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
    ]
}
}