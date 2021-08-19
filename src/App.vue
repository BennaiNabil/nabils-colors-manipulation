<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <div class="app-color-infos">
        <ColorGenerator class="app-color-gen" @update:gencolor="getGeneratedColor"></ColorGenerator>
        <ColorDetails v-if="generatedColor" :color="generatedColor" class="app-color-details"></ColorDetails>
        <ColorShades v-if="generatedColor" :initialColor="generatedColor" class="app-color-shades"></ColorShades>
      </div>
      <div v-if="generatedColor" class="app-color-history">
        <ColorsHistory :colorsHistory="colorsHistory"></ColorsHistory>
      </div>
    </v-main>
  </v-app>
</template>
<script>

import Navbar from "./components/Navbar";
import ColorGenerator from "@/components/ColorGenerator";
import ColorDetails from "@/components/ColorDetails";
import ColorShades from "@/components/ColorShades";
import ColorsHistory from "@/components/ColorsHistory";

export default {
  name: 'App',

  components: {ColorsHistory, ColorShades, ColorDetails, ColorGenerator, Navbar},

  data: () => ({
    generatedColor: '',
    colorsHistory: []
  }),
  methods: {
    getGeneratedColor: function (val) {
      this.generatedColor = val;
    }
  },
  watch: {
    generatedColor: function () {
      if (this.colorsHistory.length >= 5) {
        this.colorsHistory.pop();
      }
      this.colorsHistory.unshift({color: this.generatedColor, hour: new Date()});
    }
  }
};
</script>

<style>

.app-color-infos {
  display: flex;
  margin-top: 3rem;
}

.app-color-gen, .app-color-details, .app-color-shades {
  width: 100%;
}

.app-color-history {
  margin: 3rem;
}

@media all and (max-width: 1200px) {
  .app-color-infos {
    display: block;
  }

  .app-color-details, .app-color-shades {
    padding: 4rem;
  }

  .app-color-gen {
    padding: 0 10rem;
  }
}
</style>
