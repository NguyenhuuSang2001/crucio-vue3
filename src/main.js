import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
var scripts = [
  "https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js",
];
scripts.forEach((script) => {
  let tag = document.createElement("script");
  tag.setAttribute("src", script);
  document.head.appendChild(tag);
});
