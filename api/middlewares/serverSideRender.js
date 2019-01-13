const createBundleRenderer = require('vue-server-renderer').createBundleRenderer
const LRU = require('lru-cache')
const path = require('path')
const fs = require('fs')
let clientManifest
let serverBundle
if(fs.existsSync('../../dist/vue-ssr-client-manifest.json'))
  clientManifest = require('../../dist/vue-ssr-client-manifest.json')
if(fs.existsSync('../../dist/vue-ssr-server-bundle.json'))
  serverBundle = require('../../dist/vue-ssr-server-bundle.json')
const template = fs.readFileSync('./index.template.html', 'utf-8');


const pathResolve = file => path.resolve(__dirname, file)

const createRenderer = (bundle, options) => {
  return createBundleRenderer(bundle, Object.assign(options, {
    cache: new LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    basedir: pathResolve('../dist'),
    runInNewContext: false
  }))
}


const renderer = createRenderer(serverBundle, {
  template,
  runInNewContext: true, // 推荐
  clientManifest,
})


module.exports = (req , res, next) => {

    const context = {
      title: "ssr test",
      url: req.url
    };

    // 通过renderToString,bundle，渲染
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