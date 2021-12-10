import { createStore } from 'vuex'
import { auth } from './modules'
const store = createStore({
  state: {
    name: 'Vue'
  },
  modules: { auth }
})

export default store
