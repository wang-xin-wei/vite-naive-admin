import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

import nprogress from 'nprogress' // @types/nprogress
import 'nprogress/nprogress.css'

import { getPageTitle } from '@/utils/getPageTitle'

//  生命routes的ts类型
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则

})

//  全局前置守卫
router.beforeEach((to, from) => {
  // 进度条 开始
  nprogress.start()
  // 给页面添加title属性
  document.title = getPageTitle(to.meta.title)
  // 判断路由是否需要授权以及是否已登录 如果没有，则重定向到登录页面
  // if (to.meta.requiresAuth && !store.state.userInfo) {
  //   return {
  //     path: '/login',
  //     // 保存我们所在的位置，以便以后再来
  //     query: { redirect: to.fullPath }
  //   }
  // }
})

// 全局后置守卫
router.afterEach(() => {
  // 进度条 结束
  nprogress.done()
})

export default router
