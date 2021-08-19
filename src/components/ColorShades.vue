<template>
  <div class="nab-colshades-container">
    <hr :style="{color:initialColor}" class="nab-colshades-header-separator">
    <h3 :style="{color:initialColor}" class="nab-colshades-header">More about it</h3>
    <v-list-item v-for="(shade, index) in getShades" :key="index" class="nab-colshades-list-item">
      <span :style="{backgroundColor: shade}" class="nab-colshades-square"></span>
      <span>{{ shade.toUpperCase() }}</span>
      <span>{{ hexToRGB(shade).r }}, {{ hexToRGB(shade).g }}, {{ hexToRGB(shade).b }}</span>
    </v-list-item>

  </div>
</template>

<script>
import {generateShade, hexToRGB} from "@/plugins/colorsManipulation";

export default {
  name: "ColorShades",
  props: ['initialColor'],
  data: function () {
    return {}
  },
  methods: {
    generateShade,
    hexToRGB,
  },
  computed: {
    getShades: function () {
      return [1, 2, 3, 4, 5].map(idx => generateShade(this.initialColor, 20 * idx))
    }
  }

}
</script>

<style scoped>
.nab-colshades-header {
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0;
  text-align: left;
}


.nab-colshades-list-item {
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: space-around;
}

.nab-colshades-square {
  width: 2.5rem;
  height: 2.5rem;
}

.nab-colshades-header-separator {
  width: 80%;
}

.nab-colshades-container {
  margin-left: 3rem;
}
</style>
