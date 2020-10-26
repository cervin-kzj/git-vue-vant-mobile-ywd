<template>
  <div class="wrap" style="overflow-x: hidden">
    <indexBanner></indexBanner>
    <div class="container">
      <!-- 父传子 -->
      <indexCateItem
        v-for="(item, index) in getHomeData"
        :key="index"
        :indexdt="item"
      ></indexCateItem>
    </div>
    <!-- 格式一 -->
    <!-- <commonFooter></commonFooter> -->

    <!-- 格式二 -->
    <common-Footer></common-Footer>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import indexCateItem from "../components/indexCateItem";
import indexBanner from "../components/indexBanner";
export default {
  components: {
    indexCateItem: indexCateItem,
    indexBanner: indexBanner,
  },
  methods: {
    ...mapActions({
      setIndexDataInfoAction: "home/setIndexDataInfoAction",
    }),
  },
  computed: {
    ...mapGetters({
      getHomeData: "home/getHomeData",
    }),
  },
  mounted() {
    this.setIndexDataInfoAction();
  },
  data() {
    return {};
  },
};
</script>
<style lang="stylus"></style>