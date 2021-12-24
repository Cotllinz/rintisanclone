<template>
  <a-layout class="layout">
    <div class="newLeyouting">
      <headerComponent />
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
      <a-layout-footer class="footer">
        <Footer />
      </a-layout-footer>
      <a-layout-footer class="footer__2">
        <Footer2 />
      </a-layout-footer>
    </div>
  </a-layout>
</template>

<script>
// @ is an alias to /src
import { defineAsyncComponent } from 'vue'
import Loading from '../components/Loading/index.vue'
const asyncModalWithOptions = (name) =>
  //Async Lazy Load PerComponent
  defineAsyncComponent({
    loader: () => import('../components/HomePages/' + name + '.vue'),
    loadingComponent: Loading,
    timeout: 3000,
    delay: 3000
  })
export default {
  name: 'HomePage',
  components: {
    headerComponent: asyncModalWithOptions('headerComponen'),
    mainSection: asyncModalWithOptions('mainSection'),
    caraouselContent: asyncModalWithOptions('caraouselContent'),
    bisnisComponent: asyncModalWithOptions('BisnisComponent'),
    populerCategory: asyncModalWithOptions('PopulerCategory'),
    whyRintisan: asyncModalWithOptions('WhyRintisan'),
    risingStarComponent: asyncModalWithOptions('RisingStarComponent'),
    featureBrand: asyncModalWithOptions('FeaturedBrandComponent'),
    veriviedBusiness: asyncModalWithOptions('VerifiedBusiness'),
    ArtikelComponent: asyncModalWithOptions('ArtikelComponent'),
    limputanMedia: asyncModalWithOptions('liputanComponent'),
    Footer: asyncModalWithOptions('Footer'),
    Footer2: asyncModalWithOptions('Footer2')
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

@media (max-width: 570px) {
  :deep(.ant-layout-footer) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
