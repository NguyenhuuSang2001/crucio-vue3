<template>
  <a href="#" v-if="windowTop > 400">
    <div class="arrow"></div>
  </a>
</template>
<script>
export default {
  data() {
    return {
      windowTop: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    },
  },
};
</script>
<style>
.arrow {
  width: 40px;
  height: 40px;
  text-align: center;
  border: solid purple;
  border-width: 0 5px 5px 0;
  margin-left: 48%;
  transform: rotate(225deg);
  background-color: transparent !important;
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
