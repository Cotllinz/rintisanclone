import { createStore } from 'vuex'
import { auth } from './modules'
import createPersistedState from 'vuex-persistedstate'
const store = createStore({
  state: {
    name: 'Vue'
  },
  modules: { auth },
  plugins: [
    createPersistedState({
      paths: ['auth.user']
    })
  ]
})

export default store
