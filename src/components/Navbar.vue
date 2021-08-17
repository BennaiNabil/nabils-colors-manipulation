<template>
  <v-app-bar app class="nab-navbar text-no-wrap" style="flex: 1 1;">
    <v-app-bar-title>Random background generator V3</v-app-bar-title>
    <v-spacer></v-spacer>
    <span>
      <a class="nab-nav-link" href="#">SEE MORE</a>
    </span>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.nab-navbar {
  background: linear-gradient(90deg, #DCB8CB 0%, #D5C9DF 53.65%, #DDF1FB 100%) !important;
  color: #FFFFFF !important;

}

.nab-nav-link {
  color: #808080;
  text-decoration: inherit;
}

.v-app-bar-title__content{
  width: 200px !important;
}
</style>
