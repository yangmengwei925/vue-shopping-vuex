import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from 'vant';

Vue.use(Toast);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 购物车中列表数据
    listData: [],
    // 购物车列表复选框选中的数据
    newArr: []
  },
  getters: {
    // 计算数量
    sum(state) {
      // 每次添加重新清空
      state.newArr = []
      // 如果复选框为选中状态才计算数量
      state.listData.forEach(val => {
        if (val.flag) {
          state.newArr.push(val)
        }
      })
      return state.newArr.reduce((prve, next) => {
        return prve + next.num
      }, 0)
    },
    // 计算总价
    sumPrice(state) {
      return state.newArr.reduce((prve, next) => {
        return prve + next.num * next.newPrice
      }, 0)
    }
  },
  mutations: {
    // 首页往购物车添加
    addShop(state, action) {
      // 判断当前要添加的数据是否在购物车列表中存在
      var isFlag = state.listData.some(res => {
        return res.id === action.id
      })

      // 不存在的情况，往购物车列表中添加数据
      if (!isFlag) {
        Toast.success('添加购物车成功');
        state.listData.push(action)
      } else {
        // 存在的情况，更改当前商品的数量
        state.listData.forEach(val => {
          if (val.id === action.id) {
            val.num++
          }
        })
      }
    },
    // 根据下标来增加数量
    addCount(state, action) {
      state.listData[action].num++
    },
    // 根据下标来减少数量
    reduceCount(state, action) {
      if (state.listData[action].num === 1) {
        Toast.success('你没了');
        state.listData.splice(action, 1)
      } else {
        state.listData[action].num--
      }
    },
    // 
    addList(state, action) {
      state.listData.push(action)
    },
    // 如果有次ID的商品，就让次商品的数量增加
    addIdList(state, id) {
      state.listData.forEach(val => {
        if (val.id === id) {
          val.num++
        }
      })
    }
  },
  actions: {

  }
})
