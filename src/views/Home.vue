<template>
  <a-layout class="layout">
    <div class="newLeyouting">
      <headerComponet />
      <div class="underline" />
      <a-layout-content class="content__costums">
        <mainSection />
        <caraouselContent />
        <bisnisComponent />
        <populerCategory />
        <whyRintisan />
        <risingStarComponent />
        <featureBrand />
        <veriviedBusiness />
        <ArtikelComponent />
        <limputanMedia />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </div>
  </a-layout>
</template>

<script>
// @ is an alias to /src
import headerComponet from '../components/HomePages/headerComponen.vue'
import mainSection from '../components/HomePages/mainSection.vue'
import caraouselContent from '../components/HomePages/caraouselContent.vue'
import bisnisComponent from '../components/HomePages/BisnisComponent.vue'
import populerCategory from '../components/HomePages/PopulerCategory.vue'
import whyRintisan from '../components/HomePages/WhyRintisan.vue'
import risingStarComponent from '../components/HomePages/RisingStarComponent.vue'
import featureBrand from '../components/HomePages/FeaturedBrandComponent'
import veriviedBusiness from '../components/HomePages/VerifiedBusiness'
import ArtikelComponent from '../components/HomePages/ArtikelComponent.vue'
import limputanMedia from '../components/HomePages/liputanComponent.vue'
export default {
  name: 'HomePage',
  components: {
    headerComponet,
    mainSection,
    caraouselContent,
    bisnisComponent,
    populerCategory,
    whyRintisan,
    risingStarComponent,
    featureBrand,
    veriviedBusiness,
    ArtikelComponent,
    limputanMedia
  },
  data() {
    return {
      value1: ''
    }
  }
}
</script>

<style scoped>
.underline {
  border-top: 1px solid rgb(216, 215, 215);
  margin-top: 0px;
}
.content__costums {
  margin-top: 20px;
}
.layout {
  background: #f5f5f5;
}
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: rgb(255, 255, 255);
}

#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
