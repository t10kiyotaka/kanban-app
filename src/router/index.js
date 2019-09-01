import Vue from 'vue'
import Router from 'vue-router'
import KbnBoardView from '@/components/template/KbnBoardView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: KbnBoardView
    }
  ]
})
