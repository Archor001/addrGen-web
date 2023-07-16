import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/components/AppMain'
import AppNid from '@/components/AppNid'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppMain',
      component: AppMain
    },
    {
      path: '/nid',
      name: 'AppNid',
      component: AppNid
    }
  ]
})
