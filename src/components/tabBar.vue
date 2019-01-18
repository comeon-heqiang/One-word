<template>
  <div class="tab-bar border-top">
    <tab-bar-item
      v-for="(item,index) of tabBar"
      :key="index"
      :iconName="item.iconName"
      :text="item.text"
      :index="index"
      :url='item.url'
    ></tab-bar-item>
  </div>
</template>

<script>
import tabBarItem from './tabBarItem'
export default {
  data () {
    return {
      tabBar: [
        {
          iconName: 'icon-shouye1',
          text: '首页',
          url: ''
        },
        {
          iconName: 'icon-xingqiu1',
          text: '发现',
          url: 'find'
        },
        {
          iconName: 'icon-tianjia',
          text: '添加',
          url: 'add'
        },
        {
          iconName: 'icon-xin',
          text: '心情',
          url: 'mood'
        },
        {
          iconName: 'icon-wode1',
          text: '我的',
          url: 'my'
        }
      ]
    }
  },
  components: {
    tabBarItem
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
