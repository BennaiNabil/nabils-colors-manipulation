<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <div class="app-color-infos">
        <ColorGenerator class="app-color-gen" @update:gencolor="getGeneratedColor"></ColorGenerator>
        <ColorDetails :color="generatedColor" class="app-color-details"></ColorDetails>
        <ColorShades v-if="generatedColor" :initialColor="generatedColor" class="app-color-shades"></ColorShades>
      </div>
    </v-main>
  </v-app>
</template>
<script>

import Navbar from "./components/Navbar";
import ColorGenerator from "@/components/ColorGenerator";
import ColorDetails from "@/components/ColorDetails";
import ColorShades from "@/components/ColorShades";

export default {
  name: 'App',

  components: {ColorShades, ColorDetails, ColorGenerator, Navbar},

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
      this.colorsHistory.unshift(this.generatedColor);
      console.log(this.colorsHistory)
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
