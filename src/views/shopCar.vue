<template>
  <div>
      <ul class="oul">
        <li v-for="(item, index) in listData" :key="index">
          <h4>
            <van-checkbox @click="item.flag = !item.flag" v-model="item.flag"></van-checkbox>
            {{item.title}}
          </h4>
          <p>
            <span>
              ￥{{item.newPrice}}
            </span>

            <span style="float:right">
              <button @click="del(index)">-</button>
              {{item.num}}
              <button @click="add(index)">+</button>
            </span>
          </p>
        </li>
      </ul>
      <p>
        总价: {{sumPrice.toFixed(2)}}
      </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['listData', 'newArr']),
    ...mapGetters(['sumPrice'])
  },
  methods: {
    ...mapMutations(['addCount', 'reduceCount']),
    add(index) {
      this.addCount(index)
    },
    del(index) {
      this.reduceCount(index)
    }
  }
}
</script>

<style scoped lang="scss">
.oul{
  width: 100%;
  li{
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
}
  button{
    padding: 0 8px;
  }
</style>