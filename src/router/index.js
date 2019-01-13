import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
        {
          alias: '/',
          path: '/home',
          component: () => import('../components/Home.vue')
        },
        {
          path: '/login',
          component: () => import('../components/Login.vue')
        },
        { path: '/item/:id', component: () => import('../components/Item.vue') },
        { path: '/list', component: () => import('../components/List.vue') }
    ]
  })

}
