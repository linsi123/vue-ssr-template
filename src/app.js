import Vue from 'vue'
import { createRouter } from './router/index'
import { createStore } from './store/store'
//render function or template not defined in component: anonymous
import App from './App.vue'

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例

export function createApp (context) {
    var router = createRouter()
    var store = createStore()

    var app = new Vue({
        data: {
            // url: context.url,
            title: 'context.title'
        },
        router,
        store,
        // template: `<div>访问的 URL 是： {{ url }}</div>`,
        // 根实例简单的渲染应用程序组件。
        render: h => h(App)
    })
  
    return { app,router,store}
}

