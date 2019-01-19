<template>
  <div id="app">
    <router-view />
    <tab-bar></tab-bar>

  </div>
</template>

<script>
import TabBar from '@/components/tabBar'
export default {
  name: 'App',
  data () {
    return {}
  },
  mounted () {
  },
  components: {
    TabBar
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom: 50px;
}
</style>
