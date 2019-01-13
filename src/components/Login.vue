<template>
      <div>
            <h2>count: {{fooCount}}</h2>
            <button @click="increase()">加1+</button>
      </div>
</template>
<script>
import fooStoreModule from '../store/modules/foo'

export default {
      asyncData({store}) {
            store.registerModule('foo', fooStoreModule)
            return store.dispatch('foo/inc')
      },

      destroyed () {
            this.$store.unregisterModule('foo')
      },

      methods: {
            increase() {
                  // console.log('in')
                  this.$store.dispatch('foo/inc')
            }
      },
      computed: {
            fooCount () {
                  return this.$store.state.foo.count
            }
      },



}
</script>