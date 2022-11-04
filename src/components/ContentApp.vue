<template>
  <home-app />
  <about-app />
  <services-app :pos="windowTop" />
  <team-app />
  <portfolio-app />
</template>
<script>
import AboutApp from "./Contents/AboutApp.vue";
import HomeApp from "./Contents/HomeApp.vue";
import PortfolioApp from "./Contents/PortfolioApp.vue";
import ServicesApp from "./Contents/ServicesApp.vue";
import TeamApp from "./Contents/TeamApp.vue";
export default {
  components: { HomeApp, AboutApp, ServicesApp, TeamApp, PortfolioApp },
  data() {
    return {
      windowTop: 0,
    };
  },
  mounted() {
    // const listItem = document.querySelector("#services");
    console.log("mounted");
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      // console.log(this.windowTop);
    },
  },
};
</script>

<style lang="css"></style>
