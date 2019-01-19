<template>
  <div>
    <index-banner :list="bannerList"></index-banner>
  </div>
</template>

<script>

import findBanner from './components/Banner'
export default {
  name: 'Index',
  computed: {

  },
  data () {
    return {
      bannerList: [
        {
          imgUrl: 'https://desk-fd.zol-img.com.cn/t_s1600x900c5/g5/M00/01/01/ChMkJ1w1ov2IOkkZAAWoQAxlSAUAAuSXwDITVEABahY972.jpg',
          text: '马里奥1'
        },
        {
          imgUrl: 'https://desk-fd.zol-img.com.cn/t_s1600x900c5/g5/M00/01/01/ChMkJ1w1ov2IOkkZAAWoQAxlSAUAAuSXwDITVEABahY972.jpg',
          text: '马里奥2'
        }
      ]
    }
  },
  components: {
    findBanner
  }
}
</script>

<style scoped lang="stylus">
</style>
