const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode : "development",

    target : ["web", "es5"],

    module : 
        {
            rules : [
                {
                    test : /\.js/,
                    use : [{loader : "babel-loader"}]
                },

                {
                    test : /\.css/,
                    use : ["style-loader" , "css-loader"]
                }
            ]
        },
        plugins : [
            new HtmlWebpackPlugin({
                title: 'mu app!',
                template : 'public/index.html'
            })
        ]
}