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
        <v-btn class="nab-colgen-button" @click="genColor()">Change color {{ newColor }}</v-btn>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ColorGenerator",
  data: function () {
    return {
      newColor: '#000'
    }
  },
  methods: {
    genColor: function () {
      this.newColor = `#${Math.floor(Math.random() * Math.pow(16, 6)).toString(16)}`;
    },
    isColorLight: function (color) {
      const hexadecimalValue = color.replace("#", "");
      const redComponent = parseInt(hexadecimalValue.substr(0, 2), 16);
      const greenComponent = parseInt(hexadecimalValue.substr(2, 2), 16);
      const blueComponent = parseInt(hexadecimalValue.substr(4, 2), 16);
      const computedBrightness = (redComponent * 299 + greenComponent * 587 + blueComponent * 114) / 1000;
      return computedBrightness > 155;
    },
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
