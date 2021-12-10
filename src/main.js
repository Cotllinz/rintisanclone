import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import 'aos/dist/aos.css'
import Antd from 'ant-design-vue'
import store from './store'
// const app = createApp(App)

createApp(App).use(store).use(router).use(Antd).mount('#app')
/* app.use(store)
app.use(router)
app.use(
  AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    // default easing for AOS animations
    once: false // whether animation should happen only once - while scrolling down
  })
)

app.use(Antd) // same as Vue.use in Vue 2.X

app.mount('#app') */
