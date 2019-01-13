import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


import { fetchItem } from '../api/index'

import { fetchList } from '../api/index'

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {},
      list: []
    },
    actions: {
      fetchItem ({ commit }, id) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return fetchItem(id).then(item => {
          commit('setItem', { id, item })
        })
      },
      fetchList({commit},id) {
        return fetchList().then(res=>{
            commit('setList',res)
        })
      } 
    },
    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      },
      setList(state,payload) {
          state.list = payload
      }
    }
  })
}