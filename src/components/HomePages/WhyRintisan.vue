<template>
  <a-row>
    <a-col :span="16" :offset="4">
      <section class="title__whyRintisan">
        <h2>Kenapa Rintisan ?</h2>
        <p>Lihat mengapa franchisor di Rintisan berbeda dengan yang lain</p>
      </section>
    </a-col>
    <a-col :span="16" :offset="4">
      <div class="whyRintisan">
        <a-space>
          <section v-for="items in 4" :key="items" class="whyRintisan__detail">
            <div class="rounded"></div>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
          </section>
        </a-space>
      </div>
    </a-col>
    <a-col :span="16" :offset="4">
      <div class="slider__whyRintisan">
        <a-space>
          <section v-for="items in 4" :key="items" class="whyRintisan__detail">
            <div class="rounded"></div>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
          </section>
        </a-space>
      </div>
    </a-col>
  </a-row>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'whyRintisan'
})
</script>
<style scoped>
.whyRintisan__detail {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.rounded {
  width: 140px;
  background-color: rgb(168, 168, 168);
  height: 140px;
  border-radius: 50%;
}

.whyRintisan {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}
.title__whyRintisan {
  margin-top: 40px;
}
.title__whyRintisan h2 {
  font-weight: bold;

  margin: 0;
}
</style>
