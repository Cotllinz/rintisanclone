<template>
  <a-row class="row__verified">
    <a-col :span="16" :offset="4">
      <section class="title__verified">
        <h2>Verified Business</h2>
        <p>
          Temukan bisnis yang telah memiliki sistem dan legalitas yang telah
          terverifikasi oleh Rintisan
        </p>
      </section>
    </a-col>
    <a-col :span="16" :offset="4">
      <section class="title__verified">
        <a-carousel :slidesToShow="4" :dots="false" class="slick" arrows>
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
    <a-col :span="24">
      <a-button class="buttonShowAll">Lihat Semua</a-button>
    </a-col>
  </a-row>
</template>
<script>
import { RightOutlined, LeftOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VerifiedBusines',
  components: {
    LeftOutlined,
    RightOutlined
  }
})
</script>
<style scoped>
.title__verified h2 {
  font-size: 23px;
  font-weight: bold;
  margin: 0;
}
.title__verified h2 span {
  color: rgb(255, 38, 237);
}
.row__verified {
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
.title__verified {
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
.buttonShowAll {
  display: block;
  margin: 0 auto;
  padding: 10px 45px;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  height: max-content;
  background: rgb(188, 111, 15);
  background: linear-gradient(
    354deg,
    rgba(188, 111, 15, 1) 0%,
    rgba(255, 4, 207, 1) 49%,
    rgba(255, 4, 254, 1) 72%
  );
  border: none;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  transform: translateY(-100%);
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}
</style>
