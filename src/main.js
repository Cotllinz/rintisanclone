import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'

import Antd from 'ant-design-vue'
const app = createApp(App)
app.use(router)
app.use(Antd) // same as Vue.use in Vue 2.X
app.mount('#app')
