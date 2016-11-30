import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // replace the content of <div id="app"></div> with App
  render: h => h(App)
})
