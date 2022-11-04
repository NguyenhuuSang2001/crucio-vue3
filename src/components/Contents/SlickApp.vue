<template>
  <carousel :items-to-show="1" :wrap-around="true" :autoplay="3000">
    <slide v-for="slide in 3" :key="slide">
      <div>
        <p>{{ content[slide - 1][0] }}</p>
        <br />
        <p>{{ content[slide - 1][1] }}</p>
      </div>
    </slide>

    <template #addons> </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  props: {
    content: {
      type: Array[String],
    },
  },

  name: "App",
  components: {
    Carousel,
    Slide,
  },
};
</script>
