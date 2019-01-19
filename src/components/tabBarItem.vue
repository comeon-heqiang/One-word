<template>
  <div
    tag="div"
    @click="itemClick()"
    class="item-bar"
    :class="{'active':active==index}"
  >
    <div class="tabbar-item-icon">
      <i
        class="iconfont"
        :class="icon"
      ></i>
      <div
        class="info"
        v-if="info"
      >
        {{info}}
      </div>
    </div>
    <div class="item-text">
      {{text}}
    </div>

  </div>
</template>

<script>
export default {
  props: { icon: { type: String, required: true }, text: { type: String, required: true }, info: [String, Number], index: Number, url: String, active: Number },
  name: 'tabBarItem',
  data () {
    return {
    }
  },
  methods: {
    // item点击事件
    itemClick () {
      this.$emit('change', this.index)
      this.$router.push('/' + this.url)
    }
  }
}
</script>
<style scoped lang="stylus">
.item-bar
  flex: 1
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  color: #7d7e80
  .tabbar-item-icon
    position: relative
    margin-bottom: 5px
    .info
      position: absolute
      top: -5px
      right: -12px
      min-width: 16px
      line-height: 14px
      padding: 0 3px
      background-color: #f44
      font-size: 12px
      color: #ffffff
      text-align: center
      box-sizing: border-box
      border: 1px solid #fff
      border-radius: 16px
    i
      font-size: 20px
      margin-bottom: 5px
.active
  color: $color-primary
</style>
