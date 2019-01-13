<template>
    <div>
    <ul v-for="(item,key) in list" :key="key">
        <li><label>姓名</label>{{item.name}}</li>
        <li><label>覆盖量</label>{{item.coverage}}</li>
        <li><label>覆盖量</label>{{item.update_at}}</li>
    </ul>
    </div>
</template>


<script>
export default {
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchList', { page : 1})
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    list () {
      return this.$store.state.list
    }
  }
}
</script>