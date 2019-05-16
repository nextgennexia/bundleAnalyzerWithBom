const path = require("path");
const BomPlugin = require("webpack-utf8-bom");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env, argv) => ({
    mode: argv.mode,
    devtool: argv.mode === "development" ? "eval-source-map" : "none",
    entry: {
        SearchResults: path.join(__dirname, "./index.js"),
    },
    output: {
        path: path.join(__dirname, "./bundles"),
        filename: "[name].js",
    },
    module: {
        rules: [

        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".json"],
        modules: ["node_modules"],
    },
    plugins: [
        new BomPlugin(true),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
        }),
    ],
});
