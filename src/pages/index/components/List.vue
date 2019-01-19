<template>
  <div
    class="card-main"
    ref="main"
  >
    <ul>
      <li
        v-for="(item,index) of List"
        :key="index"
        class="card"
      >
        <div class="author">
          <img
            :src="item.author.pic"
            alt=""
          >
          {{item.author.name}}
        </div>

        <div class="text">
          {{item.text}}
        </div>

        <div class="pic">
          <img
            :src="item.src"
            alt=""
          >
        </div>
        <div class="info">
          <div class="icon time">
            <img
              src="../../../assets/icon/icon-time.png"
              alt=""
            >
            {{item.date}}
          </div>
          <div class="icon like">
            <img
              src="../../../assets/icon/icon-zan.png"
              alt=""
            >
            {{item.like}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
  data () {
    return {
      List: [
        {
          author: {
            name: '思想聚焦',
            pic: 'https://tvax2.sinaimg.cn/crop.0.0.180.180.180/67dd74e0ly8fvv8h7c3ylj2050050aac.jpg'
          },
          text: '我想说一句温暖的话，做一件温暖的事，做一个温暖的人，哪怕，我终究还是温暖不了你.',
          date: '2019/1/19',
          like: 500, // 赞
          src: 'https://wx1.sinaimg.cn/orj360/67dd74e0gy1fzbea4t53vj20j60asta3.jpg'
        },
        {
          author: {
            name: '思想聚焦',
            pic: 'https://tvax2.sinaimg.cn/crop.0.0.180.180.180/67dd74e0ly8fvv8h7c3ylj2050050aac.jpg'
          },
          text: '我想说一句温暖的话，做一件温暖的事，做一个温暖的人，哪怕，我终究还是温暖不了你.',
          date: '2019/1/19',
          like: 500, // 赞
          src: 'https://wx1.sinaimg.cn/orj360/67dd74e0gy1fzbea4t53vj20j60asta3.jpg'
        },
        {
          author: {
            name: '思想聚焦',
            pic: 'https://tvax2.sinaimg.cn/crop.0.0.180.180.180/67dd74e0ly8fvv8h7c3ylj2050050aac.jpg'
          },
          text: '我想说一句温暖的话，做一件温暖的事，做一个温暖的人，哪怕，我终究还是温暖不了你.',
          date: '2019/1/19',
          like: 500, // 赞
          src: 'https://wx1.sinaimg.cn/orj360/67dd74e0gy1fzbea4t53vj20j60asta3.jpg'
        },
        {
          author: {
            name: '思想聚焦',
            pic: 'https://tvax2.sinaimg.cn/crop.0.0.180.180.180/67dd74e0ly8fvv8h7c3ylj2050050aac.jpg'
          },
          text: '我想说一句温暖的话，做一件温暖的事，做一个温暖的人，哪怕，我终究还是温暖不了你.',
          date: '2019/1/19',
          like: 500, // 赞
          src: 'https://wx1.sinaimg.cn/orj360/67dd74e0gy1fzbea4t53vj20j60asta3.jpg'
        }
      ]
    }
  },
  methods: {
    init () {

    }
  },
  mounted () {
    this.init()
    this.scroll = new BScroll(this.$refs.main)
  }
}
</script>

<style scoped lang="stylus">
.card-main
  background: #f2f2f2
  position: absolute
  bottom: 50px
  top: 200px
  left: 0
  right: 0
  overflow: hidden
.card
  background: #fff
  margin-bottom: 0.2rem
  padding: 0.2rem
.author
  display: flex
  align-items: center
  color: #F46200
  img
    width: 0.8rem
    height: 0.8rem
    margin-right: 0.24rem
    border-radius: 50%
    border: 1px solid rgba(0, 0, 0, 0.05)
.text
  font-size: 0.28rem
  line-height: 1.6
  margin: 0.2rem 0
.pic
  img
    display: block
    width: 100%
.info
  display: flex
  margin-top: 0.2rem
.icon
  display: flex
  align-items: center
  color: #999
  margin-right: 0.1rem
  img
    width: 0.4rem
    margin-right: 0.2rem
</style>
