<template>
  <a-layout-header class="header__class">
    <section class="header_component">
      <img src="@/assets/LogoColor.png" alt="images_logo" />
      <a-input-search
        v-model:value="value"
        class="input_search"
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
    </section>
  </a-layout-header>
</template>
<script>
export default {
  name: 'headerComponent'
}
</script>
<style scoped>
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
</style>
