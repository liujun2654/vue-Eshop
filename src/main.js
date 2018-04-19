/*
入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

import store from './store'
import './assets/css/reset.css'
import './mock/mockServer'
import loading from './common/images/loading.gif'

Vue.use(VueLazyload,{
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
