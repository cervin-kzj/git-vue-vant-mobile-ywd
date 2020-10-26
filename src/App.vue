<template>
  <div>
    <toAst v-if="info" :info="info"></toAst>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["info"]),
  },
};
</script>

<style>
</style>
