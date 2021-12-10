<template>
  <div class="">
    <a-input-search
      v-model:value="formState.name"
      placeholder="cari"
      :loading="false"
    />
    <a-input-search
      v-model:value="formState.password"
      placeholder="cari"
      type="password"
      :loading="false"
    />
    <a-button @click="onSubmit">Submit</a-button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRaw } from 'vue'
// import { mapGetters } from 'vuex'
export default defineComponent({
  name: 'Login',
  setup() {
    const formState = reactive({
      name: '',
      password: '',
      display: 0
    })

    const onSubmit = () => {
      const result = toRaw(formState)

      console.log('submit!', result.name)
    }
    return {
      formState,
      onSubmit
    }
  }
})
</script>

<style></style>
