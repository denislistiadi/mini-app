import Vue from "vue"
import Chakra, { CThemeProvider, CReset } from "@chakra-ui/vue"
// import VueSplide from "@splidejs/vue-splide"
import App from "./App.vue"
import "./assets/main.css"

Vue.use(Chakra)
// Vue.use(VueSplide)

new Vue({
  el: "#app",
  render: (h) => h(CThemeProvider, [h(CReset), h(App)]),
}).$mount()
