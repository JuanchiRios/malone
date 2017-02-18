const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractSass = new ExtractTextPlugin({
    filename: "stylesheets/[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    entry: {
        index: getEntrySources([
            './js/index.js'
        ])
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'public/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader'], exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractSass.extract({
                    loader: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallbackLoader: "style-loader"
                })
            }
        ]
    },
    plugins: [
        ExtractSass
    ],
    resolve: {
        alias: {
            "react/lib/DOMProperty": "react-dom/lib/DOMProperty"
        }
    }
};
