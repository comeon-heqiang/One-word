import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Find from '@/pages/find/find'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/find',
    name: 'Find',
    component: Find
  }]
})
