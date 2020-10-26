<template>
  <div class="wrap">
    <common-header></common-header>
    <div class="loginbox" style="margin-top: 1.92rem">
      <div class="item">
        <span>手机号:</span
        ><input
          type="text"
          placeholder="请输入手机号"
          v-model="phone"
          v-focus
        />
      </div>
      <div class="item">
        <span>密&nbsp;&nbsp;&nbsp;码:</span
        ><input type="text" placeholder="请输入密码" v-model="password" />
      </div>
      <div class="forgetpwd">
        <router-link to="/">忘记密码</router-link>
      </div>
      <div class="btn">
        <van-button type="primary" @click="login">登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
// 大括号内的变量名必须与抛出名称一致
import { Button, Toast } from "vant";
import { requestLogin } from "../until/request";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      phone: "",
      password: "",
      user: {},
    };
  },
  methods: {
    ...mapActions(["changeIsloginAction"]),
    login: function () {
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
      this.user.phone = this.phone;
      this.user.password = this.password;

      requestLogin(this.user)
        .then((res) => {
          if (res.data.status == 1) {
            Toast(res.data.msg);
            this.changeIsloginAction(true);
            this.$router.go(-1);
          } else {
            Toast("登录失败");
          }
        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
};
</script>
<style scoped>
.van-button--primary {
  border: none;
}
</style>