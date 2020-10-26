<template>
  <div class="wrap">
    <common-header></common-header>
    <div class="loginbox" style="margin-top: 1.15rem">
      <div class="item">
        <span>手机号:</span>
        <input type="text" placeholder="请输入手机号" v-focus v-model="phone" />
      </div>
      <div class="item">
        <span>密&nbsp;&nbsp;&nbsp;码:</span>
        <input type="text" placeholder="请输入密码" v-model="password" />
      </div>
      <div class="item">
        <span>验证码:</span>
        <input type="text" placeholder="请输入验证码" />
        <span class="sendcode">点击获取</span>
      </div>
      <div class="btn reg">
        <van-button type="primary" @click="register">下一步</van-button>
      </div>
      <div class="agreement clearfix">
        <input type="checkbox" v-model="checked" />
        <span
          >我已阅读并同意使用<router-link to="/"
            >条款和隐私政策</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Toast } from "vant";
import { requestRegiser } from "../until/request";

export default {
  data() {
    return {
      phone: "",
      password: "",
      verification: "",
      checked: false,
      user: {},
    };
  },
  methods: {
    register: function () {
      if (this.phone == "") {
        Toast("请输入手机号");
        return;
      }
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        Toast("请输入正确格式的手机号");
        return;
      }
      if (this.password == "") {
        Toast("请输入密码");
        return;
      }
      if (this.checked == false) {
        Toast("请同意注册协议");
        return;
      }
      this.user.phone = this.phone;
      this.user.password = this.password;

      requestRegiser(this.user)
        .then((res) => {
          if (res.data.status == 1) {
            Toast("注册成功");
            this.$router.push("/login");
          } else {
            Toast(res.data.msg);
          }
        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
};
</script>
<style lang="stylus">
.van-button--primary {
  border: none;
}
</style>