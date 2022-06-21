import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Register from '@/pages/register'
import PersonalCenter from '@/pages/personalCenter'
import GoodsType from '@/pages/goodsType'
import GoodsDetails from '@/pages/goodsDetails'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: PersonalCenter
    },
    {
      path: '/goodsType',
      name: 'goodsType',
      component: GoodsType
    },
    {
      path: '/goodsDetails',
      name: 'goodsDetails',
      component: GoodsDetails
    },
  ]
})
