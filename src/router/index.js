import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import hall from '@/components/hall'
import classify from '@/components/classify'
import member from '@/components/member'
import memberList from '@/components/memberList'
import recruit from '@/components/recruit'
import security from '@/components/security'
import about from '@/components/about'
import four0four from '@/components/common/four0four'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/hall',
      name: 'hall',
      component: hall
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/memberList',
      name: 'memberList',
      component: memberList
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: recruit
    },
    {
      path: '/security',
      name: 'security',
      component: security
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    // 404路由
    { path: '*', component: four0four }
  ]
})
