// webpack.config.js
module.exports = {
    // entry point of our application
    entry: './index.js',
    // where to place the compiled bundle
    output: {
        filename: 'build.js'
    },
    module: {
        // `loaders` is an array of loaders to use.
        // here we are only configuring vue-loader
        loaders: [
            {
                test: /\.vue$/, // a regex for matching all files that end in `.vue`
                loader: 'vue' // loader to use for matched files
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
        ]
    }
}