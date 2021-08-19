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
            <v-btn v-clipboard:copy="item.hex"
                   :style="{backgroundColor: item.hex, color: isColorLight(item.hex) ?  '#000' : '#fff' }"
                   small @click="snackbar = true">
              Copy color
            </v-btn>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-snackbar v-model="snackbar">
      Copied to clipboard
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" color="pink" text @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
      snackbar: false,
      headers: [
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
    isColorLight,
  },
  computed: {
    colors: function () {
      let tmpData = [];
      for (const {color, hour} of this.colorsHistory) {
        tmpData.push({
          "hour": `${hour.getHours()}:${hour.getMinutes()}`,
          "hex": color.toUpperCase(),
          "rgb": prettifyRGB(hexToRGB(color)),
          "cmyk": prettifyCMYK(hexToCMYK(color)),
          "hsl": prettifyHSL(hexToHSL(color))
        });
      }
      return tmpData;
    }
  }
}
</script>

<style scoped>

</style>
