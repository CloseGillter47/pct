import Vue from 'vue'
import Router from 'vue-router'

// 这种是官方做法
// import HelloWorld from '@/components/HelloWorld'
// {
//   path: '/',
//   meta: { title: '' },
//   component: HelloWorld
// }

import SysRouters from './sys'
import BizRouters from './biz'

Vue.use(Router)

const Routers = [

  {
    path: '/',
    meta: { title: '' },
    component: (resolve) => require(['@/pages/index-v.vue'], resolve)
  }

];

export default new Router({
  routes: [...Routers, ...SysRouters, ...BizRouters]
})
