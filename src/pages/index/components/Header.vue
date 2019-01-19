<template>
  <div
    class="categorty"
    ref="category"
  >
    <ul>
      <li
        v-for="item of List"
        :key="item.id"
      >
        {{item.name}}
      </li>
    </ul>

  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Header',
  props: { List: Array },
  data () {
    return {

    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.category)
  },
  methods: {

  }
}
</script>

<style scoped lang="stylus">
.categorty
  height: 0.6rem
  line-height: 0.6rem
  ul
    display: flex
    li
      text-align: center
      padding: 0 0.3rem
    &.active
      color: $color-primray
</style>
