import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from '../components/Hello'

export default new Router({
  'mode': 'history',
  scrollBehavior: () => ({ y: 0 }),
  'routes': [
    {
      'path': '/',
      'component': Hello
    }
  ]
})
