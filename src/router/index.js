import {createRouter, createWebHistory} from "vue-router";
import store from "../store/index";

const routes = [
  {
    path: '/',
    redirect: to => { // 按身份重定向，无身份时定向至登录页
      switch (+store.state.identity) {
        case 1:
          return { path: '/admin' }
        default:
          return { path: '/login' }
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/admin',
    name: 'AdminCenter',
    component: () => import('../pages/AdminCenter.vue'),
    children: [{
      path: 'user',
      name: 'UserManage',
      component: () => import('../pages/admin/UserMng.vue')
    },{
      path: 'address',
      name: 'AddressManage',
      component: () => import('../pages/admin/AddressMng.vue')
    },{
      path: 'apply',
      name: 'AddressApply',
      component: () => import('../pages/admin/AddressApply.vue')
    },{
      path: 'query',
      name: 'AddressQuery',
      component: () => import('../pages/admin/AddressQuery.vue')
    },{
      path: 'create',
      name: 'NidApply',
      component: () => import('../pages/admin/NidApply.vue')
    },{
      path: 'systen',
      name: 'SystemManage',
      component: () => import('../pages/admin/SystemMng.vue')
    }]
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return arr[2] + ''
    } else {
        return null
    }
}

export default router