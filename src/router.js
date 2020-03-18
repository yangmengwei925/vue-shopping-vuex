import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/home/homes',
      children: [
        {
          path: '/home/homes',
          name: 'homes',
          component: () => import('./views/homes.vue')
        },
        {
          path: '/home/classify',
          name: 'classify',
          component: () => import('./views/classify.vue')
        },
        {
          path: '/home/vip',
          name: 'vip',
          component: () => import('./views/vip.vue')
        },
        {
          path: '/home/shopCar',
          name: 'shopCar',
          component: () => import('./views/shopCar.vue')
        },
        {
          path: '/home/my',
          name: 'my',
          component: () => import('./views/my.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/detail.vue')
    }
  ]
})
