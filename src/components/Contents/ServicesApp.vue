<template>
  <div id="services">
    <h3>{{ service.title.toUpperCase() }}</h3>
    <div class="line_center"></div>
    <p>{{ service.content }}</p>
    <div id="box_ser">
      <div v-for="(items, ind) in service.icons" :key="ind">
        <div v-for="(item, index) in items" :key="index">
          <iconify-icon :icon="item.icon"></iconify-icon>
          <div>{{ item.text }}</div>
        </div>
      </div>
    </div>
    <div v-if="pos > 2055" id="start">
      <div>WE CREATE <span>AWESOME</span> PROJECTS</div>
      <button class="hover_white">GET STARTED</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pos: Number,
  },
  data() {
    return {
      service: {
        title: "services",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icons: [
          [
            {
              icon: "ion:desktop-outline",
              text: "WEB DESIGN",
            },
            {
              icon: "ion:albums",
              text: "BRAND DESIGN",
            },
            {
              icon: "eva:keypad-fill",
              text: "UI/UX DESIGN",
            },
            {
              icon: "ion:color-palette",
              text: "GRAPHIC DESIGN",
            },
          ],
          [
            {
              icon: "ant-design:camera-filled",
              text: "PHOTOGRAPHY",
            },
            {
              icon: "ic:baseline-videocam",
              text: "VIDEO EDITING",
            },
            {
              icon: "ion:pulse",
              text: "DATA ANALYSIS",
            },
            {
              icon: "bi:person-fill",
              text: "CLIENT ASSISTANCE",
            },
          ],
        ],
      },
    };
  },
};
</script>
<style></style>
