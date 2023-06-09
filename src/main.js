import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import YmapPlugin from "vue-yandex-maps";
import store from "./store";
import PrettyCheckbox from "pretty-checkbox-vue";

const settings = {
  apiKey: "66de1122-e3b5-471d-9259-1e44ad43ea56",
  lang: "ru_RU",
  coordorder: "latlong",
  enterprise: false,
  version: "2.1",
};

createApp(App)
  .use(router)
  .use(YmapPlugin, settings)
  .use(store)
  .use(PrettyCheckbox)
  .mount("#app");
