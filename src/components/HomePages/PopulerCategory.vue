<template>
  <a-row class="row__populer">
    <a-col
      :xs="{ span: 24 }"
      :md="{ span: 20, offset: 1 }"
      :lg="{ span: 12, offset: 4 }"
    >
      <section class="title__Populer">
        <h2>Kategori Populer</h2>
        <p>Temukan kategori bisnis terpopuler</p>
      </section>
    </a-col>
    <a-col :xs="{ span: 22, offset: 1 }" :lg="{ span: 16, offset: 4 }">
      <section class="title__Populer">
        <a-carousel
          :slidesToShow="4"
          :responsive="Caraousel"
          :dots="false"
          class="slick"
          arrows
        >
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
          <div class="card" v-for="items in 5" :key="items">
            <a-card class="card__carousel">
              <div>
                <a-space :size="19">
                  <img
                    class="card_images"
                    src="../../assets//SampleJanjiJiwa.png"
                    alt="janjiJiwa"
                  />
                  <section>
                    <h3>Janji Jiwa</h3>
                    <p>Food & Beverages</p>
                    <h3>Mulai dari</h3>
                    <p>Rp. 150.000,000</p>
                  </section>
                </a-space>
              </div>
            </a-card>
          </div>
        </a-carousel>
      </section>
    </a-col>
  </a-row>
</template>
<script>
import { defineComponent } from 'vue'
import { RightOutlined, LeftOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'PopulerCategory',
  components: {
    LeftOutlined,
    RightOutlined
  },
  setup() {
    const Caraousel = [
      {
        breakpoint: 1437,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1622,
        settings: {
          slidesToShow: 3
        }
      }
    ]
    return {
      Caraousel
    }
  }
})
</script>
<style scoped>
.title__Populer h2 {
  font-size: 23px;
  font-weight: bold;
  margin: 0;
}

.title__Populer h2 span {
  color: rgb(255, 38, 237);
}
.row__populer {
  margin-top: 30px;
}
.card_images {
  border-radius: 50%;
  border: 2px solid;
  border-color: rgb(225, 8, 245);
  width: 110px;
  height: 110px;
  object-fit: cover;
}
.title__Populer {
  margin-top: 20px;
}

.card__carousel {
  margin: 0 5px;
  border-radius: 10px;
}
.card__carousel div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ant-carousel :deep(.slick-slide) {
  height: max-content;
  margin-bottom: 20px;
  overflow: hidden;
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

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  transform: translateY(-50%);
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}
@media (max-width: 767px) {
  .title__Populer {
    text-align: center;
  }
}
@media (max-width: 361px) {
  :deep(.slick-next) {
    right: 5px !important;
  }
}
</style>
