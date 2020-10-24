<template>
  <div class="index_header">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.src" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {
          src: require("../assets/images/1.jpg"),
        },
        {
          src: require("../assets/images/2.jpg"),
        },
        {
          src: require("../assets/images/3.jpg"),
        },
      ],
    };
  },
};
</script>
<style lang="stylus">
.van-swipe, .van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>