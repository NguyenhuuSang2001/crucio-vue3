<template>
  <div id="portfolio">
    <h3>OUR PORTFOLIO</h3>
    <div className="line_center"></div>
    <div className="list">
      <div v-for="(item, index) in tag" :key="index">
        <a
          :href="'#' + item"
          @click="type = item"
          :className="item === type ? 'active' : ''"
        >
          {{ item }}
        </a>
      </div>
    </div>
    <div className="detail">
      <div v-for="(item, index) in arr[type]" :key="index">
        <a href="#">
          <img :src="pre_url_img + item + '.jpg'" alt="" />
        </a>
        <!-- {{ item }} -->
      </div>

      <!-- {arr[type].map((item, index) => (
      <div key="{index}">
        <a href="#">
          <img :src="pre_url_img + item + '.jpg'" alt="" />
        </a>
      </div>
      ))} {loadmore ? more[type].map((item, index) => (
      <div key="{index}">
        <a href="#">
          <img :src="pre_url_img + item + '.jpg'" alt="" />
        </a>
      </div>
      )) : ""} -->
    </div>
    <div className="more">
      <button
        v-if="!loadmore"
        type="submit"
        className="up_case"
        @click="loadmore = !loadmore"
      >
        Load more
      </button>
    </div>

    <div className="block bg_white cl_black">
      <h2>Subscribe To Our Newsletter</h2>
      <input className="email" type="text" placeholder="Enter your email..." />
      <button type="submit" className="up_case bg_white subcribe">
        subcribe
      </button>
    </div>
    <div className="block">
      <h2>WANT TO DISCUSS YOUR NEW PROJECT?</h2>
      <button type="submit" className="up_case contact hover_white">
        contact us
      </button>
    </div>
    <div className="block bg_black cl_white" id="block_slide">
      <h3 className="up_case">TESTIMONIALS</h3>
      <div className="line_center boder_white"></div>
      <!-- {/*
      <div>
        */} {/* -->
      <div id="slider">
        <slick-app :content="content" />
      </div>

      <!-- <p className="cl_white with_80">
        It is very important to take care of yourself, to achieve success, but
        at the same time, it takes a lot of work and pain. For let me come to a
        minimum, no one engages in any kind of exercise unless he derives some
        benefit from it. But whosoever rightly reproaches him in pleasure, and
        wishes to be a hair's breadth away from pain, let him be spared nothing.
      </p>
      <p className="al_c">- John K. -</p> -->
      <!-- */}
        <BodyContent11 />
        {/* -->
      <!-- </div>
      */} -->
    </div>
    <div className="block img-logo bg_white">
      <div>
        <img
          src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client1-150x150.png"
          alt="logo"
        />
      </div>
      <div>
        <img
          src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client2-150x150.png"
          alt="logo"
        />
      </div>
      <div>
        <img
          src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client3-132x150.png"
          alt="logo"
        />
      </div>
      <div>
        <img
          src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client4.png"
          alt="logo"
        />
      </div>
      <div>
        <img
          src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client5.png"
          alt="logo"
        />
      </div>
      <div>
        <img
          src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client6.png"
          alt="logo"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SlickApp from "./SlickApp.vue";
export default {
  components: { SlickApp },
  data() {
    return {
      type: "All",
      loadmore: false,
      pre_url_img:
        "https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/work",
      arr: {
        All: [1, 2, 3, 4, 5, 6, 7],
        "Graphic Design": [1, 2, 3],
        "Web Design": [4, 5, 6],
        "Web Development": [5, 6, 7],
      },
      more: {
        All: [8],
        "Graphic Design": [8],
        "Web Design": [7],
        "Web Development": [6],
      },
      tag: ["All", "Graphic Design", "Web Design", "Web Development"],
      content: [
        [
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "- Jim P. -",
        ],
        [
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "- Morgan F. -",
        ],
        [
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "- John K. -",
        ],
      ],
    };
  },
};
</script>
<style>
#slider {
  width: 80vw;
  padding-top: 2rem;
  letter-spacing: 0.1rem;
}
</style>
