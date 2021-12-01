<template>
  <a-row>
    <a-col class="footer_1" :span="16" :offset="4">
      <a-row :gutter="16">
        <a-col :span="8">
          <div class="kontak__us">
            <h3>Kontak Kami</h3>
            <p>Perkantoran mutiara taman palem</p>
            <p>blok A16 no.16 Cengkareng,</p>
            <p>Jakarta 11730</p>
            <br />
            <p>Telepon : (021) 22363676</p>
            <p>Jam Kerja : (Senin-Jumat 9:00-17:00)</p>
            <p>Email : cs@rintisan.id</p>
          </div>
        </a-col>
        <a-col :span="8">
          <div class="mediaSocial">
            <h3>Ikuti Media Sosial Kami</h3>
            <section class="imageSocialMedia">
              <a-space>
                <a href="#">
                  <img :src="require(`@/${icons.Media1}`)" alt="" />
                </a>
                <a href="#">
                  <img :src="require(`@/${icons.Media2}`)" alt="" />
                </a>
                <a href="#">
                  <img :src="require(`@/${icons.Media3}`)" alt="" />
                </a>
                <a href="#">
                  <img :src="require(`@/${icons.Media4}`)" alt="" />
                </a>
              </a-space>
            </section>
          </div>
        </a-col>
        <a-col :span="8">
          <div class="about_rintisan">
            <h3>Ikuti Media Sosial Kami</h3>
            <section v-for="items in aboutText" :key="items">
              <a class="text_links" href="#">{{ items }}</a>
            </section>
          </div>
        </a-col>
        <a-col class="subcribe_style" :span="24">
          <h3 style="font-weight: 600">
            Langganan untuk mendapatkan info terbaru
          </h3>
          <div class="Button__subsribe">
            <a-input
              v-model:value="value"
              class="input__subcribe"
              placeholder="Masukan Email Anda"
            >
            </a-input>
            <a-button class="btn__newLetter">Langganan Newsletter</a-button>
          </div>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>
<script>
import { defineComponent } from 'vue'
import dataIcons from '@/JsonDummy/Icon'

export default defineComponent({
  name: 'footer',
  data() {
    return {
      icons: dataIcons.icon,
      aboutText: dataIcons.AboutText,
      value: ''
    }
  }
})
</script>
<style scoped>
.background {
  background: rgb(139, 139, 139);
}
.input__subcribe {
  width: 20%;
}
.subcribe_style {
  margin-top: 50px;
}
.btn__newLetter {
  border-radius: 0 10px 10px 0;
  border-left: none;
  background: rgb(188, 111, 15);
  background: linear-gradient(
    354deg,
    rgba(188, 111, 15, 1) 0%,
    rgba(255, 4, 207, 1) 49%,
    rgba(255, 4, 254, 1) 72%
  );
  color: white;
  border: none;
}
.kontak__us p {
  margin: 0;
}

.about_rintisan {
  float: right;
}

.text_links,
.kontak__us,
.mediaSocial {
  color: rgb(255, 255, 255);
}
.mediaSocial {
  text-align: center;
}
:deep(.ant-input) {
  border-radius: 10px 0 0 10px;
  color: rgb(0, 0, 0);
}
h3 {
  color: rgb(255, 255, 255);
}
</style>
