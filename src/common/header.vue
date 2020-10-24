<template>
  <header class="header">
    <van-nav-bar title="NavBar" left-arrow>
      <template #right>
        <van-icon name="search" />
      </template>
    </van-nav-bar>
  </header>
</template>
<script>
import { NavBar } from "vant";
export default {
  methods: {
    goback: function () {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="">
.van-nav-bar {
  width: 100%;
  height: inherit;
  line-height: inherit;
  background: inherit;
}
.van-nav-bar__title {
  color: #fff;
  font-size: 0.33rem;
}
.van-nav-bar .van-icon {
  color: #fff;
  font-size: 0.42rem !important;
  height: 0.42rem;
  line-height: 0.42rem;
}
.van-nav-bar__arrow {
  font-size: 0.42rem;
  height: 0.42rem;
  line-height: 0.42rem;
}
.van-hairline--bottom::after {
  border: none;
}
</style>