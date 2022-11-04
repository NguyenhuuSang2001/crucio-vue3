<template>
  <div id="about">
    <div class="up_case">WELCOME TO <span>CRUCIO</span></div>
    <p class="up_case">WE CREATE AWESOME WEBSITES</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
      incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi
      consequat. Quis aute iure reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div class="contrainer">
      <div v-for="(item, index) in data" :key="index">
        <div>{{ item.title }}</div>
        <div>{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: "RESPONSIVE",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.",
        },
        {
          title: "CUSTOMIZABLE",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex eacommodi consequat.",
        },
        {
          title: "MODERN",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit,sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.",
        },
      ],
    };
  },
};
</script>
<style></style>
