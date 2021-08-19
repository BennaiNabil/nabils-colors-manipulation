<template>
  <div>
    <v-card :style="{backgroundColor: ''+newColor}"
            class="mx-auto text-center"
            max-width="344"
            outlined>

      <v-card-subtitle :style="{color: `${isColorLight(newColor) ? '#000' : '#fff'}`    }">
        Bored of this card color ?
      </v-card-subtitle>
      <v-card-subtitle :style="{color: `${isColorLight(newColor) ? '#000' : '#fff'}`}">
        Click
        <v-icon
            :color="isColorLight(newColor)? 'black':'white'"
            large>
          mdi-chevron-down
        </v-icon>
        <span class="font-weight-bold">below</span> to change its color!
      </v-card-subtitle>
      <v-card-subtitle>
        <v-btn class="nab-colgen-button" @click="genColor()">Change color</v-btn>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import {isColorLight} from "@/plugins/colorsManipulation";

export default {
  name: "ColorGenerator",
  data: function () {
    return {
      newColor: '#000'
    }
  },
  methods: {
    genColor: function () {
      let colTmp = `#${Math.floor(Math.random() * Math.pow(16, 6)).toString(16)}`.toUpperCase();
      if (colTmp.length < 7) {
        colTmp += '0'.repeat(7 - colTmp.length)
      }
      this.newColor = colTmp;
    },
    isColorLight
  },
  watch: {
    newColor: function (col) {
      this.$emit('update:gencolor', col);
    }
  }
}
</script>

<style>
.nab-colgen-button {
  background: #FFFFFF;
  border: 1px solid #CACACA;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0.7rem;
  color: #9ECBFF;
}

.nab-colgen-maincard {
  background-color: #9ECBFF !important;
}
</style>
