// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from '@/components/layout'
// import Vuex from 'vuex'
import indexPage from '@/components/pages/indexPage'
import VRouter from 'vue-router'
// import Hello2 from '@/components/Hello2'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VRouter)
// Vue.use(Vuex)
let router = new VRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
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
