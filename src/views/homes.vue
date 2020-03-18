<template>
  <div>
      <div class="wrapBox">
        <div v-for="(item, index) in list" :key="index" class="itemWrap">
          <div @click="pushDetail(item)">
            <img class="img" :src="item.img" alt="">
          </div>
          <p>
            {{item.title}}
          </p>
          <p class="word">
            <span style="float:left">
              ￥{{item.newPrice}}
            </span>
            <span class="smallBox" @click="add(item)" style="float:right">
              +
            </span>
          </p>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    axios.get('/getList').then(res => {
      this.list = res.data
      console.log(this.list)
    }) 
  },
  methods: {
    ...mapMutations(['addShop']),
    add(item) {
      this.addShop(item)
      // this.$store.commit('addShop', item)
    },
    pushDetail(item) {
      this.$router.push({
        path: '/detail',
        query: {
          item: item
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapBox{
    display: flex;
    flex-wrap: wrap;
    .itemWrap{
      width: 30%;
      margin-right: 3%;
      div{
        width: 100%;
        .img{
          width: 100%;
          height: 100px;
        }
      }
      .word{
        line-height: 36px;
        color: orange;
      }
      .smallBox{
        width: 22px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        display: inline-block;
        border: 1px solid orange;
        margin-top: 8px;
      }
    }
  }
</style>