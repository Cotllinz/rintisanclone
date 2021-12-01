<template>
  <a-row>
    <a-col :span="16" :offset="4">
      <div class="disclamer_footer">
        <section class="disclamer__desc">
          <h5>Disclaimer:</h5>
          <p>
            Kami akan menjaga informasi yang akurat dan terkini, namun Kami
            tidak dapat menjamin keakuratan informasi. Silakan verifikasi
            informasi franchise, dan tingkat pendanaan selama proses aplikasi.
          </p>
        </section>
        <section class="images_desc">
          <img :src="require(`../../assets/Logo White.png`)" alt="imageLogo" />
          <p>© 2021 Rintisan.id. All Rights Reserved.</p>
        </section>
      </div>
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
.disclamer_footer {
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h5 {
  margin: 0;
  color: #fff;
  font-size: 14px;
}
.disclamer__desc {
  width: 50%;
}
.images_desc {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
}
.images_desc p {
  margin-top: 10px;
}
</style>
