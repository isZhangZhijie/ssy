import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import hall from '@/components/hall'
import classify from '@/components/classify'
import member from '@/components/member'
import memberList from '@/components/memberList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
      // children: [
      //   {path: '/index', component: index, name: '首页'}
      // ]
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
    }
  ]
})
