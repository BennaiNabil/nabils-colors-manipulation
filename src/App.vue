<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <div class="my-11">
        <div class="row">
          <div class="col-4">
            <ColorGenerator @update:gencolor="getGeneratedColor"></ColorGenerator>
          </div>
          <div class="col-8">
            <div class="row">
              <div v-if="generatedColor" class="col-6">
                <ColorDetails :color="generatedColor"></ColorDetails>
              </div>
              <div class="col-6">Des nouvelles dingueries</div>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>
<script>

import Navbar from "./components/Navbar";
import ColorGenerator from "@/components/ColorGenerator";
import ColorDetails from "@/components/ColorDetails";

export default {
  name: 'App',

  components: {ColorDetails, ColorGenerator, Navbar},

  data: () => ({
    generatedColor: ''
  }),
  methods: {
    getGeneratedColor: function (val) {
      this.generatedColor = val;
    }
  }
};
</script>
