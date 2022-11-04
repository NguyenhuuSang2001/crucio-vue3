<template>
  <header-app />
  <top-app />
  <content-app />
  <footer-app />
  <!-- <slick-app :content="content" /> -->
</template>

<script>
import "./assets/Css/style.css";
import "./assets/Css/Gotop.css";
import "./assets/Css/Contact.css";
import "./assets/Css/Slider.css";
import "./assets/Css/index.css";
import HeaderApp from "./components/HeaderApp.vue";
import ContentApp from "./components/ContentApp.vue";
import FooterApp from "./components/FooterApp.vue";
import TopApp from "./components/TopApp.vue";
// import SlickApp from "./components/Contents/SlickApp.vue";
export default {
  name: "App",
  components: { HeaderApp, ContentApp, FooterApp, TopApp },
  data() {
    return {
      // content: ["1", "2", "3"],
    };
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
