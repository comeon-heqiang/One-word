<template>
  <div>
    <index-header :list="categoryList"></index-header>
    <index-list></index-list>
  </div>
</template>

<script>
import indexHeader from './components/Header'
import indexList from './components/List'

export default {
  name: 'Index',
  data () {
    return {
      categoryList: [
        {
          id: 1,
          name: '励志语录'
        },
        {
          id: 2,
          name: '爱情语录'
        },
        {
          id: 3,
          name: '人生感悟'
        },
        {
          id: 4,
          name: '伤感句子'
        }
      ]
    }
  },
  components: {
    indexList,
    indexHeader

  }
}
</script>

<style scoped lang="stylus">
</style>
