const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

// const vueConf = require('./vue-loader.conf')
module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        },
        extensions: ['.js', '.vue']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        // publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [   
        {
            test: /\.(js|jsx)$/,
            include: [path.resolve(__dirname, '../src')],
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    'transform-vue-jsx',
                    '@babel/plugin-syntax-jsx',
                    '@babel/plugin-syntax-dynamic-import'
                ]
                }
            }
        }, 
        {
            test: /(\.vue)$/,
            use: [
              {
                loader: 'vue-loader'
              }
            ]
          }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}