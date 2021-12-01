<template>
  <a-row>
    <a-col
      :xs="{ span: 24 }"
      :md="{ span: 20, offset: 1 }"
      :lg="{ span: 12, offset: 4 }"
    >
      <section class="title__Artikel">
        <h2>Artikel Terbaru</h2>
        <p>Pelajari berbagai info terbaru mengenai bisnis waralaba</p>
      </section>
    </a-col>
    <a-col
      :xs="{ span: 22, offset: 1 }"
      :lg="{ span: 16, offset: 4 }"
      style="overflow: hidden"
    >
      <div class="card_artikel">
        <a-carousel
          class="slick_artikel"
          :dots="false"
          :responsive="Caraousel"
          :draggable="true"
          :slidesToShow="2"
          :autoplay="true"
        >
          <div v-for="item in 5" :key="item">
            <a-card class="articel_cardBody">
              <template #cover>
                <img
                  class="images_cover"
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              </template>
              <a-card-meta title="Artikel Terkini">
                <template #avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
                <template #description>
                  <p>
                    Tokopedia mengimelementasi Mesin Baru Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Minima quod culpa
                    consequuntur beatae dolorem excepturi saepe consectetur est,
                    obcaecati sapiente repudiandae perferendis praesentium sit
                    similique enim amet officiis impedit pariatur...
                    <span class="readMore__btn">read more</span>
                  </p>
                </template>
              </a-card-meta>
            </a-card>
          </div>
        </a-carousel>
      </div>
    </a-col>
  </a-row>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FeaturedComponent',

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
  },
  methods: {}
})
</script>
<style scoped>
.title__Artikel h2 {
  font-size: 23px;
  font-weight: bold;
  margin: 0;
}
.readMore__btn {
  color: blue;
  cursor: pointer;
}
.card_artikel {
  background: rgb(231, 231, 231);
  height: max-content;
  padding: 30px 70px;
  overflow: inherit;
}
.articel_cardBody {
  margin-right: 20px;
  border-radius: 10px;
}
.slick_artikel {
  min-width: 90vw;
}
.images_cover {
  width: 100%;
  border-radius: 10px 10px 0 0;
  height: 200px;
  object-fit: cover;
}
.ant-carousel :deep(.slick-slide) {
  height: max-content;
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

@media (max-width: 767px) {
  .title__Artikel {
    text-align: center;
    margin-top: 30px;
  }
}
@media (max-width: 573px) {
  .slick_artikel {
    min-width: 100%;
  }
  .card_artikel {
    background: rgb(231, 231, 231);
    height: max-content;
    padding: 10px 10px 10px 10px;
    margin-top: 20px;
    overflow: inherit;
  }
  .articel_cardBody {
    margin: 0 5px;
  }
}
@media (max-width: 361px) {
  :deep(.slick-next) {
    right: 5px !important;
  }
}
</style>
