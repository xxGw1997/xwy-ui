import Vue from "vue";
import App from "./App.vue";
import xwyUI from "../packages";
Vue.use(xwyUI)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
