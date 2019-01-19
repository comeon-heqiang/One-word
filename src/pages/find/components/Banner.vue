<template>
  <div>
    <swiper
      :options="swiperOption"
      class="banner-swiper"
      ref="mySwiper"
    >
      <!-- slides -->
      <swiper-slide
        v-for="item in List"
        :key="item.id"
      >
        <img
          :src="item.imgUrl"
          alt=""
        >
        <div>
          {{item.text}}
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Banner',
  props: { List: Array },
  data () {
    return {
      swiperOption: {

      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="stylus">
.banner-swiper
  img
    display: block
    width: 100%
</style>
