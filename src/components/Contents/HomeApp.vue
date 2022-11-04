<template>
  <div id="home">
    <h1 id="title_home">{{ home.title }}</h1>
    <div className="line_center"></div>
    <h3 id="content_home">{{ home.content }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      home: {
        title: "CRUCIO",
        content: "POWERFUL WEBSITES",
      },
    };
  },
};
</script>
<style></style>
