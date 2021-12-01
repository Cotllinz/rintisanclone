<template>
  <a-row>
    <a-col :span="24">
      <a-carousel :draggable="true" class="carousel__style" autoplay>
        <div
          v-for="(item, index) in imageLibrary"
          class="images_tampung"
          :key="item"
        >
          <!--  <h1>{{ item }}</h1> -->
          <img class="imagesCaraousel" :src="item" :alt="`${index} images`" />
        </div>
      </a-carousel>
    </a-col>
  </a-row>
</template>
<script>
import { defineComponent } from 'vue'
import data from '@/JsonDummy/CityIndonesia'
export default defineComponent({
  name: 'caraouselContent',
  data() {
    return {
      imageLibrary: data.CaraouselImage
    }
  }
})
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  height: 370px;

  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.imagesCaraousel {
  object-fit: cover;
  object-position: 45%;
  width: 100%;
  height: max-content;
}

.carousel__style {
  margin-top: 20px;
}
@media (max-width: 450px) {
  .ant-carousel :deep(.slick-slide) {
    height: min-content;
    overflow: hidden;
  }
}
</style>
