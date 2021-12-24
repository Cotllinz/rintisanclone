<template>
  <div class="LoadingContainer"><h2>LAGI LOADING NIH</h2></div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Loading'
})
</script>

<style scoped>
.LoadingContainer {
  width: 100%;
  height: 100vh;
  background: yellow;
}
</style>
