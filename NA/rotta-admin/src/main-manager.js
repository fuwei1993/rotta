
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App-manager'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import fastclick from 'fastclick'
import store from './store/store'
import './style/globalStyle.css'
import echarts from 'echarts'
import crypto from 'crypto'
import VueQuillEditor from 'vue-quill-editor'
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.prototype.$crypto = crypto
Vue.prototype.$echarts = echarts
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 路由
  store, // 状态管理器
  template: '<App/>',
  components: { App }
})

