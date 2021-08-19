import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import colors from 'vuetify/lib/util/colors'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
    vuetify,
    theme: {
        themes: {
            light: {
                primary: colors.red.darken1, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
        },
    },
    render: h => h(App)
}).$mount('#app')
