var webpack  = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var providePlugin = new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery' });

module.exports = {
    entry : {
        entry: './entry.js'
    }, 
    output:{
        path: './output/',
        filename: '[name].js',
    },
    
    module:{
        rules:[
            {
                test: /\.less$/, 
                use:[
                    "style-loader", 
                    "css-loader", 
                    "less-loader",
                ]
            },
                       
            {
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: './output' ,
                })
            },
            
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            
            {
                test: /\.(jpg|png)$/, 
                use: ["url-loader"] 
            }
        ]         
    },
    
    plugins: [
        providePlugin,
        
        new UglifyJSPlugin(),
        
        new ExtractTextPlugin({
            filename: 'RS.css',
            disable: false,
            allChunks: true,
        }),
    ]
}