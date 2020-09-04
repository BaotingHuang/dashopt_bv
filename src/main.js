import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(IconsPlugin);

// app.js
// import Vue from "vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin

// app.js

// app.js
// import "./custom.scss";

Vue.config.productionTip = false;
window.router = router
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
