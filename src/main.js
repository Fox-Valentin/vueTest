// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from '@/components/layout'
// import Vuex from 'vuex'

import indexPage from '@/components/pages/indexPage'
import detailPage from '@/components/pages/detailPage'
import orderList from '@/components/pages/orderList'
import detailFor from '@/components/pages/detail/forecast'
import detailAna from '@/components/pages/detail/analysis'
import detailCou from '@/components/pages/detail/count'
import detailPub from '@/components/pages/detail/publish'

import VRouter from 'vue-router'
import Vueresource from 'vue-resource'
// import Hello2 from '@/components/Hello2'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VRouter)
Vue.use(Vueresource)
// Vue.use(Vuex)
let router = new VRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
    },
    {
      path: '/detail',
      component: detailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'forecast',
          component: detailFor
        },
        {
          path: 'analysis',
          component: detailAna
        },
        {
          path: 'count',
          component: detailCou
        },
        {
          path: 'publish',
          component: detailPub
        }
      ]
    },
    {
      path: '/orderList',
      component: orderList
    }
  ]
})
new Vue({
  el: '#app',
  components: {
    layout
  },
  template: '<layout/>',
  router
})
