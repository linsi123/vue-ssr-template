
const devServer = require('../../build/dev-server')
const express = require('express');
const app = express()
const LRU = require('lru-cache')

let renderer

function createRenderer (bundle, template) {
    return require('vue-server-renderer').createBundleRenderer(bundle, {
        template,
        cache: new LRU({
            max: 1000,
            maxAge: 1000 * 60 * 15
        }),
        // clientManifest,
        // basedir: pathResolve('../dist'),
        runInNewContext: true, // 推荐
    })
}
devServer(app,(bundle, template) => {
    // todo :dev下没有build出来
    // const clientManifest = require('./dist/vue-ssr-client-manifest.json')
    renderer = createRenderer(bundle, template)
    console.log(0)
})


module.exports = (req,res,next) => {
    if (!renderer) {
        return res.end('waiting for compilation... refresh in a moment.')
    }

    const context = {
        title: "ssr test",
        url: req.url
    };

    renderer.renderToString(context,(err, html) => {
        if (err) {
          if (err.code === 404) {
            res.status(404).end('Page not found')
          } else {
            res.status(500).end('Internal Server Error')
          }
        } else {
          res.end(html)
        }
      });

}