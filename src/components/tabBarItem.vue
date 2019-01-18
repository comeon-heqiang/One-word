<template>
  <div
    tag="div"
    @click="itemClick(index)"
    class="item-bar"
    :class="{'active':active==index}"
  >
    <i
      class="iconfont"
      :class="iconName"
    ></i>
    <div class="item-text">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  props: { iconName: String, text: String, info: String || Number, index: Number, url: String },
  name: 'tabBarItem',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    // item点击事件
    itemClick (index) {
      this.active = index
      this.$router.push('/' + this.url)
    }
  }
}
</script>
<style scoped lang="stylus">
.active
  .item-text
    color: #ffd45a
.item-bar
  flex: 1
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  i
    color: #ffd45a
    font-size: 20px
    margin-bottom: 5px
</style>
