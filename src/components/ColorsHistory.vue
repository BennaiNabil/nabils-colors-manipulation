<template>
  <div>
    <h3 class="mb-2">PREVIOUS COLORS</h3>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th v-for="(header,index) in headers" :key="index">
            {{ header.text }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in colors" :key="index" :style="{backgroundColor: index % 2 ? '#fff' : '#eee'}">
          <td>{{ item.hour }}</td>
          <td>{{ item.hex }}</td>
          <td>{{ item.rgb }}</td>
          <td>{{ item.cmyk }}</td>
          <td>{{ item.hsl }}</td>
          <td>
            <v-btn :style="{backgroundColor: item.hex, color: isColorLight(item.hex) ?  '#000' : '#fff' }" small>Copy
              color
            </v-btn>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>

import {
  hexToCMYK,
  hexToHSL,
  hexToRGB,
  isColorLight,
  prettifyCMYK,
  prettifyHSL,
  prettifyRGB
} from "@/plugins/colorsManipulation";

export default {
  name: "ColorsHistory",
  props: ['colorsHistory'],
  data() {
    return {
      headers: [
        {text: 'square', value: ''},
        {text: 'HOUR', value: 'hour'},
        {text: 'HEX', value: 'hex'},
        {text: 'RGB', value: 'rgb'},
        {text: 'CMYK', value: 'cmyk'},
        {text: 'HSL', value: 'hsl'},
        {text: '', value: 'btn'},
      ],
    }
  },
  methods: {
    isColorLight
  },
  computed: {
    colors: function () {
      let tmpData = [];
      for (const obj of this.colorsHistory) {
        tmpData.push({
          "hour": `${obj.hour.getHours()}:${obj.hour.getMinutes()}`,
          "hex": obj.color.toUpperCase(),
          "rgb": prettifyRGB(hexToRGB(obj.color)),
          "cmyk": prettifyCMYK(hexToCMYK(obj.color)),
          "hsl": prettifyHSL(hexToHSL(obj.color))
        });
      }
      return tmpData;
    }
  }
}
</script>

<style scoped>

</style>
