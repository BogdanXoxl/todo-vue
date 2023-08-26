import { createApp } from "vue";
import App from "./App.vue";
import * as UIComponents from "./components/UI";
import * as Icons from "./components/icons";

import "./main.css";

const app = createApp(App);

Object.values(UIComponents).forEach((component) => {
  app.component(component.name, component);
});

Object.values(Icons).forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
