import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Home from '../components/Home.vue'
import TestOne from '../components/TestOne.vue'
import TestTwo from '../components/TestTwo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: '/home',
        name: 'Home',
        component: Home
      }, {
        path: '/test-one',
        name: 'TestOne',
        component: TestOne
      }, {
        path: '/test-two',
        name: 'TestTwo',
        component: TestTwo
      }]
    }
  ]
})
