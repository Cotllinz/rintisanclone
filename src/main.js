import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import 'aos/dist/aos.css'
import Antd from 'ant-design-vue'
import store from './store'
// import npProggres from 'vue-nprogress'
import { closeComponent } from './actionDirective/'

// const options = {
//   latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
//   router: true, // Show progressbar when navigating routes, default: true
//   http: false // Show progressbar when doing Vue.http, default: true
// }

// const NPproggres = new npProggres()
createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .directive('click-outside', closeComponent)
  .mount('#app')
