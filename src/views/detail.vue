<template>
  <div>
      <div>
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img style="width:100%" :src="image" />
            </van-swipe-item>
            </van-swipe>
      </div>
      <h2>
          {{this.$route.query.item.id}}
      </h2>
      <p class="word">
          <span class="smallBox">
              {{this.$store.getters.sum}}
          </span>
          <span class="iconfont icon-gongjijinchaxun"></span>
      </p>
      <van-button @click="add" type="warning">添加按钮</van-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
        images: [
            'https://img.yzcdn.cn/vant/apple-1.jpg',
            'https://img.yzcdn.cn/vant/apple-2.jpg'
        ]
    }
  },
  computed: {
      ...mapState(['listData'])
  },
  methods: {
      ...mapMutations(['addCount', 'addList', 'addIdList']),
      add() {
          //   判断当前的这个商品是否存在购物车列表中
          var isFlag = this.listData.some(res => {
              return res.id === this.$route.query.item.id
          })

          if (isFlag) {
              this.addIdList(this.$route.query.item.id)
          } else {
              this.addList(this.$route.query.item)
          }
          
      }
  }
}
</script>

<style scoped>
.word{
    position: relative;
}
    .smallBox{
            position: absolute;
            width: 20px;
            height: 20px;
            line-height: 20px;
            border-radius: 50%;
            background: red;
            color: #fff;
            text-align: center;
            left: 15px;
          }
</style>