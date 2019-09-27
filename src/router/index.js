import Vue from 'vue'
import Router from 'vue-router'
import myhome from '../views/myhome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myhome',
      component: myhome
    }
  ]
})
