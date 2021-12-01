<template>
  <a-layout class="layout">
    <div class="newLeyouting">
      <headerComponet />
      <a-layout-content class="content__costums">
        <mainSection />
        <!-- <caraouselContent /> -->
        <!-- <bisnisComponent /> -->
        <!-- <populerCategory /> -->
        <!-- <whyRintisan /> -->
        <!-- <risingStarComponent /> -->
        <!-- <featureBrand /> -->
        <!-- <veriviedBusiness /> -->
        <!-- <ArtikelComponent /> -->
        <!-- <limputanMedia /> -->
      </a-layout-content>
      <!-- <a-layout-footer class="footer"> -->
      <!-- <Footer /> -->
      <!-- </a-layout-footer> -->
      <!-- <a-layout-footer class="footer__2"> -->
      <!-- <Footer2 /> -->
      <!-- </a-layout-footer> -->
    </div>
  </a-layout>
</template>

<script>
// @ is an alias to /src
import headerComponet from '../components/HomePages/headerComponen.vue'
import mainSection from '../components/HomePages/mainSection.vue'
// import caraouselContent from '../components/HomePages/caraouselContent.vue'
// import bisnisComponent from '../components/HomePages/BisnisComponent.vue'
// import populerCategory from '../components/HomePages/PopulerCategory.vue'
// import whyRintisan from '../components/HomePages/WhyRintisan.vue'
// import risingStarComponent from '../components/HomePages/RisingStarComponent.vue'
// import featureBrand from '../components/HomePages/FeaturedBrandComponent'
// import veriviedBusiness from '../components/HomePages/VerifiedBusiness'
// import ArtikelComponent from '../components/HomePages/ArtikelComponent.vue'
// import limputanMedia from '../components/HomePages/liputanComponent.vue'
// import Footer from '../components/HomePages/Footer.vue'
// import Footer2 from '../components/HomePages/Footer2.vue'
export default {
  name: 'HomePage',
  components: {
    headerComponet,
    mainSection
    // caraouselContent,
    // bisnisComponent,
    // populerCategory,
    // whyRintisan,
    // risingStarComponent,
    // featureBrand,
    // veriviedBusiness,
    // ArtikelComponent,
    // limputanMedia,
    // Footer,
    // Footer2
  },
  data() {
    return {
      value1: ''
    }
  }
}
</script>

<style scoped>
.content__costums {
  margin-top: 20px;
}
.layout {
  background: #ffffff;
}
.footer {
  background: #6d6e70;
  padding-top: 60px;
  height: max-content;
  padding-bottom: 60px;
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
.footer__2 {
  background: #464646;
  padding: 60px 0;
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
