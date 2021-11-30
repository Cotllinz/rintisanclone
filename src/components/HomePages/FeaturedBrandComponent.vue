<template>
  <a-row>
    <a-col :span="16" :offset="4">
      <section class="title__Feature">
        <h2>Featured Brand</h2>
        <p>
          Temukan berbagai brand dengan bisnis yang telah terbukti oleh waktu
        </p>
      </section>
    </a-col>
    <a-col :span="16" :offset="4">
      <a-carousel :slidesToShow="5" :dots="false" class="slick" arrows>
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: -12px; zindex: 1">
            <a-button class="button__Arrow"><LeftOutlined /></a-button>
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 0px">
            <a-button class="button__Arrow"><RightOutlined /></a-button>
          </div>
        </template>
        <div class="card" v-for="items in 10" :key="items">
          <a-card :bordered="false" class="card__carousel">
            <img src="../../assets/SampleJNE.png" alt="images" />
          </a-card>
        </div>
      </a-carousel>
    </a-col>
  </a-row>
</template>
<script>
import { RightOutlined, LeftOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FeaturedComponent',
  components: {
    LeftOutlined,
    RightOutlined
  }
})
</script>
<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: max-content;
  margin-bottom: 20px;
  overflow: hidden;
}

.title__Feature h2 {
  font-size: 23px;
  font-weight: bold;
  margin: 0;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.items_rising {
  display: flex;
  align-items: center;
}
.button__Arrow {
  margin: 0;
  padding: 0;
  height: 50px;
  width: 35px;
  text-align: center;
  border-radius: 5px;
  color: rgb(255, 55, 255);
  font-size: 20px;
}
.slick {
  margin-top: 10px;
}
.card__carousel {
  height: 130px;
  align-items: center;
  display: flex;
}
.card_images {
  border-radius: 50%;
  border: 2px solid;
  border-color: rgb(225, 8, 245);
  width: 110px;
  height: 110px;
  object-fit: cover;
}
.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  transform: translateY(-100%);
  top: 45%;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}
</style>
