<template>
  <div class="tab-bar border-top">
    <tab-bar-item
      v-for="(item,index) of tabBar"
      :key="index"
      :icon="item.icon"
      :text="item.text"
      :index="index"
      :url='item.url'
      :active="active"
      @change="itemChange"
      :info="item.info"
    ></tab-bar-item>
  </div>
</template>

<script>
import tabBarItem from './tabBarItem'
export default {
  data () {
    return {
      active: 0,
      tabBar: [
        {
          icon: 'icon-shouye1',
          text: '首页',
          url: ''
        },
        {
          icon: 'icon-xingqiu1',
          text: '发现',
          url: 'find',
          info: '10'
        },
        {
          icon: 'icon-tianjia',
          text: '添加',
          url: 'add'
        },
        {
          icon: 'icon-xin',
          text: '心情',
          url: 'mood'
        },
        {
          icon: 'icon-wode1',
          text: '我的',
          url: 'my'
        }
      ]
    }
  },
  components: {
    tabBarItem
  },
  methods: {
    itemChange (activeIndex) {
      this.active = activeIndex
    }
  }
}
</script>
<style scoped lang="stylus">
.tab-bar
  position: fixed
  bottom: 0
  left: 0
  right: 0
  display: flex
  height: 50px
  background-color: #fff
</style>
