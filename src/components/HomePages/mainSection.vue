<template>
  <a-row class="">
    <a-col :span="24">
      <div class="selection__franchese">
        <a-space :size="20">
          <section class="holdSlider">
            <a-button
              class="slinderStyle"
              :class="showValue ? '' : 'btnFrenchese'"
              @click.stop="activedSlider()"
            >
              {{
                showValue
                  ? `Rp. ${parseInt(value[0])?.toLocaleString(
                      'id-ID'
                    )} - Rp. ${parseInt(value[1])?.toLocaleString('id-ID')}`
                  : 'Harga Franchise'
              }}
              <DownOutlined v-if="!showValue" class="logoFranchise" />
            </a-button>
            <transition name="modal">
              <div v-if="showSlider == true" class="slider__franchaseSalary">
                <a-card
                  :bordered="true"
                  id="modal_id"
                  v-click-outside="closeModal"
                  class="cardSlider"
                >
                  <a-row>
                    <a-col class="title__price" :span="24">
                      <p>Price Range :</p>
                      <p>
                        {{
                          `Rp. ${parseInt(value[0])?.toLocaleString(
                            'id-ID'
                          )} - Rp. ${parseInt(value[1])?.toLocaleString(
                            'id-ID'
                          )}`
                        }}
                      </p>
                      <a-slider
                        class="slider__style"
                        v-model:value="value"
                        @change="read()"
                        range
                        :step="1000"
                        :max="1000000"
                        :min="0"
                        :tip-formatter="null"
                      />
                    </a-col>
                  </a-row>
                </a-card>
              </div>
            </transition>
          </section>

          <a-select
            v-model:value="valueMultiple"
            mode="multiple"
            class="sliderMultipled slinderStyle"
            placeholder="Lokasi"
            :showArrow="true"
            :options="
              valueOption.map((item, i) => ({
                value: item
              }))
            "
          >
          </a-select>
          <a-select
            placeholder="industri"
            ref="select"
            v-model:value="value1"
            class="slinderStyle"
            @focus="focus"
            :showSearch="true"
          >
            <a-select-option
              v-for="item in valueIndustri"
              :key="item"
              :value="item"
              >{{ item }}</a-select-option
            >
          </a-select>
          <a-button type="button" class="submitButton">Cari Bisnis</a-button>
        </a-space>
      </div>
      <div class="selection__franchese__mobile">
        <a-row>
          <a-col class="mobileSelectionCol" :span="24">
            <section class="holdSlider">
              <a-button
                class="slinderStyle__mobile"
                :class="showValue ? '' : 'btnFrenchese'"
                @click="activedSlider"
              >
                {{
                  showValue
                    ? `Rp. ${parseInt(value[0])?.toLocaleString(
                        'id-ID'
                      )} - Rp. ${parseInt(value[1])?.toLocaleString('id-ID')}`
                    : 'Harga Franchise'
                }}
                <DownOutlined v-if="!showValue" class="logoFranchise" />
              </a-button>
              <div v-if="showSlider == true" class="slider__franchaseSalary">
                <a-card :bordered="true" @mouseleave="close" class="cardSlider">
                  <a-row>
                    <a-col class="title__price" :span="24">
                      <p>Price Range :</p>
                      <p>
                        {{
                          `Rp. ${parseInt(value[0])?.toLocaleString(
                            'id-ID'
                          )} - Rp. ${parseInt(value[1])?.toLocaleString(
                            'id-ID'
                          )}`
                        }}
                      </p>
                      <a-slider
                        class="slider__style"
                        v-model:value="value"
                        @change="read()"
                        range
                        :step="1000"
                        :max="1000000"
                        :min="0"
                        :tip-formatter="null"
                      />
                    </a-col>
                  </a-row>
                </a-card>
              </div>
            </section>
          </a-col>
          <a-col class="mobileSelectionCol" :span="24">
            <a-select
              v-model:value="valueMultiple"
              mode="multiple"
              class="sliderMultipled slinderSelect__mobile"
              placeholder="Lokasi"
              :showArrow="true"
              :options="
                valueOption.map((item, i) => ({
                  value: item
                }))
              "
            >
            </a-select>
          </a-col>
          <a-col class="mobileSelectionCol" :span="24">
            <a-select
              placeholder="industri"
              ref="select"
              v-model:value="value1"
              class="slinderSelect__mobile1"
              @focus="focus"
              :showSearch="true"
            >
              <a-select-option
                v-for="item in valueIndustri"
                :key="item"
                :value="item"
                >{{ item }}</a-select-option
              >
            </a-select>
          </a-col>
          <a-col :span="24">
            <a-button type="button" class="submitButton"
              >Cari Bisnis</a-button
            ></a-col
          >
        </a-row>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { DownOutlined } from '@ant-design/icons-vue'
import city from '../../JsonDummy/CityIndonesia'
export default {
  name: 'mainSection',
  components: {
    DownOutlined
  },
  emits: ['click'],
  data() {
    return {
      showSlider: false,
      value: [0, 400000],
      valueMultiple: [],
      showValue: false,
      valueOption: city.kota,
      valueIndustri: city.Industri
    }
  },

  methods: {
    activedSlider() {
      this.showSlider === false
        ? (this.showSlider = true)
        : (this.showSlider = false)
    },
    close() {
      // this.showSlider = true
    },

    classCheck(e) {
      //close component offside click
      const getId = document.getElementById('modal_id')
      console.log(getId.contains(e))
      if (!getId.contains(e)) {
        this.showSlider = false
      }
    },
    closeModal() {
      this.showSlider = false
    },
    read() {
      this.showValue = true
    }
  }
}
</script>
<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 1s;
}
.modal-enter, .modal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.selection__franchese {
  display: flex;
  justify-content: center;
}
.slider__franchaseSalary {
  position: absolute;
  width: 400px;
  top: 60px;
  left: 50%;
  z-index: 1;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.cardSlider {
  border-radius: 15px;

  background: #fafafa;
}
.cardSlider::before {
  content: '';
  position: absolute;
  left: 42%;
  top: -20px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #f7f7f7;
}
.btnFrenchese {
  display: flex;
  align-items: center;
  color: rgb(207, 207, 207);
  justify-content: space-between;
}
.holdSlider {
  position: relative;
}
.logoFranchise {
  color: rgb(204, 204, 204);
}
.slider__style {
  width: 100%;
}
.sliderMultipled {
  max-height: 100px;
}
:deep(.ant-select-selection-overflow) {
  overflow-y: scroll;
  max-height: 29px;
}
:deep(.ant-select-selection-overflow::-webkit-scrollbar) {
  height: 0px;
}
:deep(.ant-select-selector) {
  border-radius: 10px !important;
}

.slinderStyle:nth-child(0) {
  width: 220px;
  text-align: center;
  border-radius: 10px;
}
.slinderStyle {
  width: 200px;
  border-radius: 10px;
}

.submitButton {
  border-radius: 10px;
  background: rgb(188, 111, 15);
  background: linear-gradient(
    354deg,
    rgba(188, 111, 15, 1) 0%,
    rgba(255, 4, 207, 1) 49%,
    rgba(255, 4, 254, 1) 72%
  );
  color: white;
  outline: none;
  border: none;
}
.selection__franchese__mobile {
  display: none;
}
.title__price p {
  margin: 0;
  font-weight: bold;
}
@media (max-width: 918px) {
  .selection__franchese {
    display: none;
    justify-content: unset;
  }

  .selection__franchese__mobile {
    display: block;
  }
  .slinderSelect__mobile {
    width: 90%;
    display: block;
    border-radius: 10px;
    margin: 0 auto;
  }
  .slinderSelect__mobile:deep(.ant-select-selector) {
    padding: 5px 4px !important;
  }
  .slinderSelect__mobile1:deep(.ant-select-selector) {
    height: 40px;
    padding: 5px 10px;
  }
  .slinderSelect__mobile1 {
    width: 89.9%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border-radius: 10px;
  }
  .slinderStyle__mobile {
    width: 89.9%;
    height: 40px;
    margin: 0 auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
  .submitButton {
    width: 89.9%;
    display: block;
    margin: 0 auto;
    height: 50px;
  }
  .slider__franchaseSalary {
    top: 65px;
  }
  .mobileSelectionCol {
    margin: 10px 0 14px 0;
  }
}

@media (max-width: 395px) {
  .slider__franchaseSalary {
    width: 350px;
  }
}
</style>
