<template>
  <div class="wrap">
    <common-Header></common-Header>
    <div class="usercenter">
      <div class="userbg">
        <div class="userinfo">
          <div class="avatarbox">
            <img
              src="../assets/images/avatar.jpg"
              class="avatar"
              v-if="islogin"
            />
          </div>
          <span class="nickname" @click="login">{{ Tips }}</span>
        </div>
      </div>
      <div class="collection_box box_mb">
        <div class="collection_info">
          <img src="../assets/images/keep.png" />
          <span>我的收藏<i>(5)</i></span>
        </div>
      </div>
      <div class="order_box box_mb">
        <div class="order_box_top">
          <h2>我的订单</h2>
          <a href="#">查看全部订单</a>
        </div>
        <ul class="order_box_bottom">
          <li>
            <img src="../assets/images/icon_boligation.png" alt="" />
            <span>代付款</span>
          </li>
          <li>
            <img src="../assets/images/prepare.png" alt="" />
            <span>代发货</span>
          </li>
          <li>
            <img src="../assets/images/icon_consignee.png" alt="" />
            <span>待收货</span>
          </li>
          <li>
            <img src="../assets/images/icon_evaluate.png" alt="" />
            <span>待评价</span>
          </li>
          <li>
            <img src="../assets/images/icon_refund.png" alt="" />
            <span>退款/售后</span>
          </li>
        </ul>
      </div>
      <div class="address_box">收货地址</div>
    </div>
    <common-Footer></common-Footer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["islogin"]),
    Tips() {
      if (this.islogin) {
        return "昵称";
      } else {
        return "点击登录";
      }
    },
  },
  methods: {
    login() {
      if (!this.islogin) {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style lang="stylus"></style>