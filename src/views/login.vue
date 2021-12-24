<template>
  <div class="">
    <a-input-search
      v-model:value="formState.username"
      placeholder="cari"
      :loading="false"
    />
    <a-input-search
      v-model:value="formState.password"
      placeholder="cari"
      type="password"
      :loading="false"
    />
    <a-button @click.prevent="onSubmit">Submit</a-button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import { mapActions } from '../vuexAction'
export default defineComponent({
  name: 'Login',
  setup() {
    const formState = reactive({
      username: '',
      password: ''
    })
    const router = useRouter()

    const { login } = mapActions()
    const onSubmit = () => {
      const result = toRaw(formState)
      login(result)
        .then((res) => {
          const { role } = res.data.data
          if (role === 'HR') {
            console.log('masuk nih')
            router.push({ name: 'HomePage' })
            // kondisi ini yang dijalankan tapi gak mau entry dan stuck di halaman login
          } else {
            console.log('masuk nih')
            router.push('/homeHr')
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
    return {
      login,
      formState,
      onSubmit
    }
  },
  methods: {
    onSubmitwithMethods() {
      const result = toRaw(this.formState)
      this.login(result)
        .then((res) => {
          const { role } = res.data.data
          if (role === 'HR') {
            console.log('masuk nih')
            this.$router.push('/homePage')
            // kondisi ini yang dijalankan tapi gak mau entry dan stuck di halaman login
          } else {
            console.log('masuk nih')
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
})
</script>

<style></style>
