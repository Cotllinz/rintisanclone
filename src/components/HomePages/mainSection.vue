<template>
  <a-row class="">
    <a-col :lg="24" class="selection__franchese">
      <a-space :size="20">
        <section class="holdSlider">
          <a-button
            class="slinderStyle"
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
                <a-col :span="24">
                  <p>Price Range :</p>
                  <p>
                    {{
                      `Rp. ${parseInt(value[0])?.toLocaleString(
                        'id-ID'
                      )} - Rp. ${parseInt(value[1])?.toLocaleString('id-ID')}`
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
      this.showSlider = false
    },
    read() {
      this.showValue = true
    }
  }
}
</script>
<style scoped>
.selection__franchese {
  display: flex;
  justify-content: center;
}
.slider__franchaseSalary {
  position: absolute;
  width: 400px;
  top: 45px;
  left: 50%;
  z-index: 1;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
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
</style>
