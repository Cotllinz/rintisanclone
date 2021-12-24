<template>
  <div v-if="turnModal.turnModalConfig" class="cardAdd">
    <div class="body__card">
      <div>
        <section class="TitleModal">
          <h2>Add Product</h2>
        </section>
        <hr />
        <section class="FormInputbody">
          <div class="FormInput">
            <label class="labelFormInput" for="namePoduct"
              >Name Product :</label
            >
            <input class="input" type="text" name="nameProduct" />
          </div>
          <div class="FormInput">
            <label class="labelFormInput" for="namePoduct"
              >Category Product :</label
            >
            <input class="input" type="text" name="categoryProduct" />
          </div>
          <div class="FormInput">
            <label class="labelFormInput" for="namePoduct"
              >Price Product :</label
            >
            <input class="input" type="text" name="priceProduct" />
          </div>
        </section>
        <hr />
        <section class="Footer__Modal">
          <button type="button" class="submit__btn">Submit</button>
          <button type="button" class="cencel__btn">Cancel</button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Propslearn',
  props: ['turnModal']
})
</script>

<style scoped>
.cardAdd {
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: unset; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.body__card {
  width: 100%;
  border-radius: 10px;
  background: rgb(255, 255, 255);

  height: max-content;
  padding: 40px 0;
}
.TitleModal {
  padding: 3% 5% 0 5%;
  font-size: 16px;
  font-weight: 500;
}
.TitleModal h2 {
  margin-bottom: 5px;
}
.FormInputbody {
  padding: 3% 5% 0 5%;
  width: 100%;
  /* background: red; */
}
.FormInput {
  width: 100%;
  display: flex;
  flex-grow: 1;
  font-size: 17px;
  padding-bottom: 20px;
  /* background: yellow; */
}
.labelFormInput {
  flex-grow: 0;
}
.input {
  margin: 0 0 0 20px;
  flex-grow: 2;
  border: none;
  background: transparent;
  border-bottom: 1px solid;
}
.input:focus {
  outline: none;
}
.Footer__Modal {
  display: block;
  padding: 3% 5% 0 5%;
  text-align: right;
}
.submit__btn {
  background: rgb(45, 136, 255);
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 10px 30px;
  border-radius: 10px;
  margin-right: 15px;
}
.submit__btn,
.cencel__btn {
  cursor: pointer;
}
.cencel__btn {
  font-size: 18px;
  font-weight: bold;
  background: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
}
</style>
