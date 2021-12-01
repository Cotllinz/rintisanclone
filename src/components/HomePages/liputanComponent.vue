<template>
  <a-row class="bg_liputan">
    <a-col :span="16" :offset="4">
      <h2 class="title">Liputan Media</h2>
    </a-col>
    <a-col :span="16" class="images__partner" :offset="4">
      <div>
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <img
                :src="require(`../../${PartnerIcon.Partner1}`)"
                alt="dataImage"
              />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <img
                :src="require(`../../${PartnerIcon.Partner2}`)"
                alt="dataImage"
              />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <img
                :src="require(`../../${PartnerIcon.Partner3}`)"
                alt="dataImage"
              />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <img
                :src="require(`../../${PartnerIcon.Partner4}`)"
                alt="dataImage"
              />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <img
                :src="require(`../../${PartnerIcon.Partner5}`)"
                alt="dataImage"
              />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <img
                :src="require(`../../${PartnerIcon.Partner6}`)"
                alt="dataImage"
              />
            </div>
          </a-col>
        </a-row>
      </div>
    </a-col>
  </a-row>
</template>
<script>
import { defineComponent } from 'vue'
import dataIcon from '../../JsonDummy/Icon'
export default defineComponent({
  name: 'liputanMedia',
  data() {
    return {
      PartnerIcon: dataIcon.Partner
    }
  }
})
</script>
<style scoped>
.bg_liputan {
  background: linear-gradient(
    133deg,
    rgba(209, 163, 34, 1) 0%,
    rgba(221, 129, 88, 1) 6%,
    rgba(240, 73, 175, 1) 47%,
    rgba(255, 29, 244, 1) 76%,
    rgba(193, 74, 209, 1) 92%
  );
  margin-top: 70px;
}
.title {
  margin: 30px 0;
  text-align: center;
  color: #fff;
}
.images__partner {
  margin-bottom: 40px;
}
.gutter-box {
  padding: 15px 0;
  text-align: center;
  margin: 10px 0;
}
</style>
