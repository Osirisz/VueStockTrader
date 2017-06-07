import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.root = 'https://vuestocktrader.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
