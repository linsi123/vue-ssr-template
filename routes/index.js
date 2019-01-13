var express = require('express');
var router = express.Router();

const LRU = require('lru-cache')
const path = require('path')
// const renderer = require('vue-server-renderer').createRenderer()
// const renderer = require('vue-server-renderer').createRenderer({
//   template: require('fs').readFileSync('./index.template.html', 'utf-8')
// })
// const renderer = require('vue-server-renderer').createBundleRenderer({
//   template: require('fs').readFileSync('./index.template.html', 'utf-8'),
//   runInNewContext: false, // 推荐
// })


// const createBundleRenderer = require('vue-server-renderer').createBundleRenderer
// const clientManifest = require('../dist/vue-ssr-client-manifest.json')
// const serverBundle = require('../dist/vue-ssr-server-bundle.json')
// const template = require('fs').readFileSync('./index.template.html', 'utf-8');

// const pathResolve = file => path.resolve(__dirname, file)

// const createRenderer = (bundle, options) => {
//   return createBundleRenderer(bundle, Object.assign(options, {
//     cache: new LRU({
//       max: 1000,
//       maxAge: 1000 * 60 * 15
//     }),
//     basedir: pathResolve('../dist'),
//     runInNewContext: false
//   }))
// }




// const renderer = createRenderer(serverBundle, {
//   template,
//   runInNewContext: true, // 推荐
//   clientManifest,
// })

// 用了bundle就不能用这些，否则会把vue引进来
// const createApp = require('../src/app.js')
// const createApp = require('../src/entry-server.js')

/* GET home page. */
router.get('*',function(req, res, next) {
  // const app = new Vue({
  //   data: {
  //     url: req.url
  //   },
  //   template: `<div>访问的 URL 是： {{ url }}</div>`
  // })

    // const data = {
    //   url: req.url
    // }
    const context = {
      url: req.url,
      title: req.title
    }

  

    // 通过renderToString,bundle，渲染
    // var renderStream = renderer.renderToString(context,(err, html) => {
    //     if (err) {
    //       if (err.code === 404) {
    //         res.status(404).end('Page not found')
    //       } else {
    //         res.status(500).end('Internal Server Error')
    //       }
    //     } else {
    //       res.end(html)
    //     }
    // });



    // 通过renderToString server-entry.js 渲染 ,成功
    // createApp(context).then(app => {
    //   renderer.renderToString( app  , (err, html) => {
    //     if (err) {
    //       if (err.code === 404) {
    //         res.status(404).end('Page not found')
    //       } else {
    //         res.status(500).end('Internal Server Error')
    //       }
    //     } else {
    //       res.end(html)
    //     }
    //   })
    // }).catch((err)=>{ 
    //   if (err) {
    //     if (err.code === 404) {
    //       res.status(404).end('Page not found')
    //     }
    //   }
    // }) 

    //  直接渲染html字符串
  // const { app } = createApp(context)

  // renderer.renderToString(app, (err, html) => {
  //   console.log(err)
  //   if (err) {
  //     res.status(500).end('Internal Server Error')
  //     return
  //   }
  //   res.end(`
  //     <!DOCTYPE html>
  //     <html lang="en">
  //       <head><title>Hello</title></head>
  //       <body>${html}</body>
  //     </html>
  //   `)
  //   // res.render('index', { title: 'Express',html });
  // })


});

module.exports = router;
