<template>
  <a-row>
    <a-col
      :xs="{ span: 24 }"
      :md="{ span: 20, offset: 1 }"
      :lg="{ span: 16, offset: 4 }"
    >
      <section class="title__whyRintisan">
        <h2>Kenapa Rintisan ?</h2>
        <p>Lihat mengapa franchisor di Rintisan berbeda dengan yang lain</p>
      </section>
    </a-col>
    <a-col
      :xs="{ span: 24 }"
      :md="{ span: 22, offset: 1 }"
      :lg="{ span: 16, offset: 4 }"
    >
      <div class="whyRintisan">
        <section v-for="items in 4" :key="items" class="whyRintisan__detail">
          <div class="rounded"></div>
          <h3>Lorem ipsum dolor sit amet consectetur</h3>
        </section>
      </div>
    </a-col>
    <a-col
      :xs="{ span: 23, offset: 1 }"
      :lg="{ span: 16, offset: 4 }"
      class="slider__holdUp"
    >
      <div class="slider__whyRintisan">
        <a-carousel :slidesToShow="2" :dots="false" :draggable="true">
          <div v-for="items in 4" :key="items">
            <a-card class="card__carousel">
              <div>
                <a-space :size="19"> </a-space>
              </div>
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
  name: 'whyRintisan'
})
</script>
<style scoped>
.whyRintisan__detail {
  margin-top: 30px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.whyRintisan__detail h3 {
  margin-top: 20px;
}
.slider__whyRintisan {
  margin-top: 50px;
  min-width: 90vw;
}
.slider__holdUp {
  overflow: hidden;
}
.card__carousel {
  height: 200px;
  margin-right: 20px;
  border-radius: 10px;
  background: rgb(228, 228, 228);
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
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  height: max-content;
  padding: 20px 0;
  overflow: inherit;
}

.ant-carousel :deep(.slick-slide h3) {
  color: rgb(0, 0, 0);
}
@media (max-width: 991px) {
  .rounded {
    width: 120px;
    background-color: rgb(168, 168, 168);
    height: 120px;
    border-radius: 50%;
  }
  .slider__whyRintisan {
    margin-top: 50px;
    min-width: 150vw;
  }
}

@media (max-width: 767px) {
  .title__whyRintisan {
    text-align: center;
  }
}

@media (max-width: 576px) {
  .rounded {
    width: 100px;
    background-color: rgb(168, 168, 168);
    height: 100px;
    border-radius: 50%;
  }
  .slider__whyRintisan {
    margin-top: 50px;
    min-width: 150vw;
  }
  .whyRintisan__detail {
    margin-top: 30px;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .title__whyRintisan {
    margin-top: 10px;
  }
}

@media (max-width: 471px) {
  .rounded {
    width: 70px;
    background-color: rgb(168, 168, 168);
    height: 70px;
    border-radius: 50%;
  }
  .slider__whyRintisan {
    margin-top: 50px;
    min-width: 150vw;
  }
  .whyRintisan__detail {
    margin-top: 30px;
    font-size: 8px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .title__whyRintisan {
    text-align: center;
    margin-top: 10px;
  }
}
</style>
