import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from 'jquery'

import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'

Vue.use(vuescroll)

$('html')

Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
