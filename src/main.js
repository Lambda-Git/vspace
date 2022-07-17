// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// element-ui的css
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import axios from 'axios'
Vue.prototype.$http = axios;

// 使用elementUI
Vue.use(ElementUI)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
