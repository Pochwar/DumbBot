const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './app.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ],
        // loaders: [
        //         {
        //             test: /\.css$/,
        //             loader: [ 'style-loader', 'css-loader' ]
        //         }
        // ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};
