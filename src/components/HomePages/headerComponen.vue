<template>
  <a-layout-header class="header__class">
    <section class="header_component">
      <img src="@/assets/LogoColor.png" alt="images_logo" />
      <a-input-search
        v-model:value="value"
        class="input_search web_section"
        placeholder="cari"
        style="width: 350px"
        @search="onSearch"
        :loading="false"
      />
      <div class="group__direction">
        <a @click="franchisor">Anda Franchisor?</a>
        <a>Register</a>
        <a>Login</a>
      </div>
      <div
        id="nav-icon3"
        @click="showOpened"
        class="menus_mobile"
        :class="ShowOpen && 'open'"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <div v-if="ShowOpen" class="mobile__nav">
      <a-input-search
        v-model:value="value"
        class="input_search__mobile"
        placeholder="cari"
        @search="onSearch"
        :loading="false"
      />
      <div class="mobile_direction">
        <a>Register</a>
        <a @click="franchisor">Anda Franchisor?</a>
        <a>Login</a>
      </div>
    </div>
  </a-layout-header>
  <div class="underline" />
</template>
<script>
export default {
  name: 'headerComponent',
  components: {},
  data() {
    return {
      ShowOpen: false,
      value: ''
    }
  },
  methods: {
    showOpened() {
      !this.ShowOpen ? (this.ShowOpen = true) : (this.ShowOpen = false)
    }
  }
}
</script>
<style scoped>
.underline {
  border-top: 1px solid rgb(216, 215, 215);
  margin-top: 0px;
}
.header__class {
  background: transparent;
}
.group__direction a {
  margin-right: 10px;
  position: relative;
}
.group__direction a:nth-child(2):after,
.group__direction a:nth-child(3):after {
  background: none repeat scroll 0 0 transparent;
  bottom: -3px;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: rgb(99, 99, 99);
  transition: width 0.5s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.group__direction a:nth-child(2):hover:after,
.group__direction a:nth-child(3):hover:after {
  width: 100%;
  left: 0;
}
.group__direction a:nth-child(1) {
  color: rgb(255, 34, 200);
}
.group__direction a:nth-child(2) {
  color: rgb(0, 0, 0);
}
.menus_mobile {
  display: none;
}
.group__direction a:nth-child(3) {
  color: rgb(0, 0, 0);
}
.group__direction a:nth-child(1):hover {
  color: rgb(255, 0, 191);
  transition: 0.5ms;
}
.input_search {
  border-radius: 10px;
  height: 40px;
}

.header_component {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
}

.mobile__nav {
  display: none;
}

@media (max-width: 918px) {
  .group__direction {
    display: none;
  }
  .web_section {
    display: none;
  }
  .mobile_direction {
    display: flex;
    height: 40px;
    margin-bottom: 25px;
    justify-content: space-around;
  }
  .mobile_direction a {
    margin-right: 10px;

    position: relative;
  }
  .mobile_direction a:nth-child(1):after,
  .mobile_direction a:nth-child(3):after {
    background: none repeat scroll 0 0 transparent;
    bottom: -3px;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: rgb(99, 99, 99);
    transition: width 0.5s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  .mobile_direction a:nth-child(1):hover:after,
  .mobile_direction a:nth-child(3):hover:after {
    width: 100%;
    left: 0;
  }
  .mobile_direction a:nth-child(2) {
    color: rgb(255, 34, 200);
  }
  .mobile_direction a:nth-child(1) {
    color: rgb(0, 0, 0);
  }
  .mobile_direction a:nth-child(3) {
    color: rgb(0, 0, 0);
  }
  .mobile_direction a:nth-child(2):hover {
    color: rgb(255, 0, 191);
    transition: 0.5ms;
  }
  .header_component {
    display: flex;
    height: min-content;
    align-items: center;
    margin-top: 0;
    justify-content: space-between;
  }
  .menus_mobile {
    display: block;
  }
  .menuIcons {
    font-size: 20px;
    cursor: pointer;
  }
  .menuClose {
    font-size: 20px;
    cursor: pointer;
  }
  .ant-layout-header {
    padding: 5px 15px;
    height: max-content;
  }
  .mobile__nav {
    display: flex;
    flex-direction: column;
    height: max-content;
  }
  .input_search__mobile {
    display: inherit;
    margin-top: 20px;
    border-radius: 10px;
    height: 40px;
  }
  #nav-icon3 {
    width: 40px;
    height: 55px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
  #nav-icon3 span {
    display: block;
    position: absolute;
    height: 7px;
    width: 100%;
    background: #fc3aab;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }
  #nav-icon3 span:nth-child(1) {
    top: 15px;
  }
  #nav-icon3 span:nth-child(2),
  #nav-icon3 span:nth-child(3) {
    top: 25.3px;
  }

  #nav-icon3 span:nth-child(4) {
    top: 36px;
  }

  #nav-icon3.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  #nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
}
@media (max-width: 363px) {
}
</style>
