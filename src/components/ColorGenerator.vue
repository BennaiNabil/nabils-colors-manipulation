<template>
  <div>
    <v-card class="mx-auto nab-colgen-maincard text-center"
            max-width="344"
            outlined>
      <v-card-subtitle>
        Bored of this card color ?
      </v-card-subtitle>
      <v-card-subtitle>
        Click <v-icon
          large
          color="blue-grey darken-2"
      >
        mdi-chevron-down
      </v-icon>
        <span class="font-weight-bold">below</span> to change its color!
      </v-card-subtitle>
      <v-card-subtitle>
        <v-btn class="nab-colgen-button text--indigo">Change color</v-btn>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ColorGenerator"
}
</script>

<style>
.nab-colgen-button {
  background: #FFFFFF !important;
  border: 1px solid #CACACA !important;
  box-sizing: border-box !important;
  border-radius: 8px !important;
  padding: 0.7rem;
  color: #9ECBFF !important;
}

.nab-colgen-maincard {
  background-color: #9ECBFF !important;
}
</style>
