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
export default {
  name: "ColorDetails",
  props: ['color'],
  data: () => ({}),
  methods: {
    objToArr: (obj) => {
      return Object.values(obj);
    },
    hexToRGB: (hex) => {
      let validHEXInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!validHEXInput) {
        return false;
      }
      let res = {
        r: parseInt(validHEXInput[1], 16),
        g: parseInt(validHEXInput[2], 16),
        b: parseInt(validHEXInput[3], 16),
      };
      console.log(res)
      return res;
    },
    hexToCMYK: (hex) => {

      let [computedC, computedM, computedY, computedK] = [0, 0, 0, 0];

      hex = (hex.charAt(0) === "#") ? hex.substring(1, 7) : hex;
      if (hex.length !== 6 || /[0-9a-f]{6}/i.test(hex) !== true) {
        return [-1, -1, -1, -1];
      }

      let r = parseInt(hex.substring(0, 2), 16);
      let g = parseInt(hex.substring(2, 4), 16);
      let b = parseInt(hex.substring(4, 6), 16);

      if (r === 0 && g === 0 && b === 0) {
        computedK = 1;
        return [0, 0, 0, 1];
      }

      computedC = 1 - (r / 255);
      computedM = 1 - (g / 255);
      computedY = 1 - (b / 255);

      let minCMY = Math.min(computedC, Math.min(computedM, computedY));
      computedC = Math.round(100 * (computedC - minCMY) / (1 - minCMY));
      computedM = Math.round(100 * (computedM - minCMY) / (1 - minCMY));
      computedY = Math.round(100 * (computedY - minCMY) / (1 - minCMY));
      computedK = Math.round(100 * minCMY);

      return [computedC, computedM, computedY, computedK];
    },
    hexToHSL: (hex) => {

      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

      let r = parseInt(result[1], 16);
      let g = parseInt(result[2], 16);
      let b = parseInt(result[3], 16);

      r /= 255;
      g /= 255;
      b /= 255;
      let max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      h = Math.round(360 * h);
      s = Math.round(s * 100);
      l = Math.round(l * 100);
      return [h, s, l];
    },
    rgbToHSV: (r, g, b) => {
      r = r / 255.0;
      g = g / 255.0;
      b = b / 255.0;
      let c_hi = Math.max(r, Math.max(g, b));
      let c_lo = Math.min(r, Math.min(g, b));
      let delta = c_hi - c_lo;
      let h = -1, s = -1;
      if (c_hi === c_lo)
        h = 0;
      else if (c_hi === r)
        h = (60 * ((g - b) / delta) + 360) % 360;
      else if (c_hi === g)
        h = (60 * ((b - r) / delta) + 120) % 360;
      else if (c_hi === b)
        h = (60 * ((r - g) / delta) + 240) % 360;
      if (c_hi === 0)
        s = 0;
      else
        s = (delta / c_hi) * 100;
      let v = c_hi * 100;
      return [h, s, v].map(Math.round);
    }
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
