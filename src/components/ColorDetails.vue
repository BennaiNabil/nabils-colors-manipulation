<template>
  <div class="nab-coldetails-container">
    <h3 :style="{color: color}" class="nab-coldetails-header">This is your color !</h3>
    <hr :style="{color: color}">
    <div class="nab-coldetails-list">
      <div class="d-flex justify-space-between">
        <span>#HEX</span>
        <span>{{ color }}</span>
      </div>
      <div class="d-flex justify-space-between">
        <span>RGB</span>
        <span>{{ hexToRGB(color).r }}, {{ hexToRGB(color).g }}, {{ hexToRGB(color).b }}</span>
      </div>
      <div class="d-flex justify-space-between">
        <span>CMYK</span>
        <span>{{ hexToCMYK(color)[0] }}%, {{ hexToCMYK(color)[1] }}%, {{ hexToCMYK(color)[2] }}%, {{
            hexToCMYK(color)[3]
          }}%</span>
      </div>
      <div class="d-flex justify-space-between">
        <span>HSV</span>
        <span>
          {{ rgbToHSV(...this.objToArr(hexToRGB(color)))[0] }}°,
        {{ rgbToHSV(...this.objToArr(hexToRGB(color)))[1] }}%,
        {{ rgbToHSV(...this.objToArr(hexToRGB(color)))[2] }}%
        </span>
      </div>
      <div class="d-flex justify-space-between">
        <span>HSL</span>
        <span>{{ hexToHSL(color)[0] }}°, {{ hexToHSL(color)[1] }}%, {{ hexToHSL(color)[2] }}%</span>
      </div>
    </div>
    <hr :style="{color: color}">
    <h3 :style="{color: color}" class="nab-coldetails-footer">I hope you like it 😋</h3>

  </div>
</template>

<script>
import {hexToCMYK, hexToHSL, hexToRGB, rgbToHSV} from "@/plugins/colorsManipulation";

export default {
  name: "ColorDetails",
  props: ['color'],
  data: () => ({}),
  methods: {
    hexToRGB,
    hexToCMYK,
    hexToHSL,
    rgbToHSV,
    objToArr: (obj) => {
      return Object.values(obj);
    },
  }
}
</script>

<style>
.nab-coldetails-header {
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0;
  text-align: left;
}

.nab-coldetails-list {
  margin: 1.5rem 0 !important;
}

.nab-coldetails-container {
}

.nab-coldetails-footer {
  font-family: Roboto, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0;
  text-align: right;
}
</style>
