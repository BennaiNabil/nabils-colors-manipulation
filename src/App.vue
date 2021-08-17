<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <div class="my-11">
        <div class="row">
          <div class="col-4">
            <ColorGenerator></ColorGenerator>
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-6">Des dingueries</div>
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

export default {
  name: 'App',

  components: {ColorGenerator, Navbar},

  data: () => ({
    //
  }),
};
</script>
