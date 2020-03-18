<template>
  <div class="hello">
    <header class="header">
      我的title
    </header>

    <section class="section">
      <router-view></router-view>
    </section>

    <footer class="footer">
      <router-link active-class="active" v-for="(item, index) in list" tag="dl" :key="index" :to="item.path">
        <dt>
          <span :class="'iconfont icon-' + item.icon"></span>
          <span v-if="item.flag" class="smallBox">
            {{sum}}
            <!-- {{this.$store.getters.sum}} -->
          </span>
        </dt>
        <dd>
          {{item.title}}
        </dd>
      </router-link>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      list: [
        {
          title: "配送到家",
          path: "/home/homes",
          icon: "gongjijinchaxun",
          flag: false
        },
        {
          title: "分类",
          path: "/home/classify",
          icon: "tongguowancheng",
          flag: false
        },
        {
          title: "会员",
          path: "/home/vip",
          icon: "sousuo",
          flag: false
        },
        {
          title: "购物车",
          path: "/home/shopCar",
          icon: "youjian",
          flag: true
        },
        {
          title: "我的",
          path: "/home/my",
          icon: "personalcenter",
          flag: false
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['sum'])
  }
}
</script>

<style scoped lang="scss">
  .hello{
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    .section{
      flex: 1;
    }
    .footer{
      width: 100%;
      display: flex;
      dl{
        flex: 1;
        text-align: center;
        line-height: 30px;
        dt{
          position: relative;
          .smallBox{
            position: absolute;
            width: 20px;
            height: 20px;
            line-height: 20px;
            border-radius: 50%;
            background: red;
            color: #fff;
            text-align: center;
            right: 15px;
          }
        }
      }
    }
  }
  .active{
    color: orange;
  }
</style>
