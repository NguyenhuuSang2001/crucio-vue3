<template>
  <header>
    <div className="nav_top">
      <a href="#">
        <img :class="logo.cl" :src="logo.src" alt="logo" />
      </a>
      <button class="btn">Buy now</button>
    </div>
    <ul id="nav">
      <li className="fl_l">
        <a href="">
          <img
            src="http://crucio.riccardoborchi.it/wp-content/uploads/2017/05/logo-1.png"
            alt=""
          />
        </a>
      </li>
      <li class="fl_r" v-for="item in menu.slice().reverse()" :key="item">
        <a :href="'#' + item" class="up_case">
          {{ item }}
        </a>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  data() {
    return {
      logo: {
        src: "https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg",
        cl: "logo",
      },
      menu: [
        "home",
        "about",
        "services",
        "team",
        "portfolio",
        "blog",
        "contact",
      ],
    };
  },
};
</script>

<style></style>
