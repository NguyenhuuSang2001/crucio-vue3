<template>
  <div id="team">
    <h3>OUR TEAM</h3>
    <!-- {{ pos }} -->
    <div className="line_center"></div>
    <div className="box_team_detail">
      <div v-for="(item, index) in arr" :key="index">
        <img :src="url_img + item + '.jpg'" alt="" />
      </div>
    </div>
  </div>
  <div id="statistical" class="block">
    <div v-for="(item, index) in data_" :key="index">
      <div>{{ item.number ? item.number : 0 }}</div>
      <div>{{ item.text ? item.text : "" }}</div>
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
      url_img:
        "https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/team",
      arr: [1, 2, 3],
      data_: [
        {
          text: "Clients",
          number: 150,
        },
        {
          text: "Projects",
          number: 620,
        },
        {
          text: "Awards",
          number: 25,
        },
        {
          text: "Coffee",
          number: 940,
        },
      ],
    };
  },
};
</script>
<style></style>
