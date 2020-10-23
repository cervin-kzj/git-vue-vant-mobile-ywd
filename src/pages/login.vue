<template>
    <div class="wrap">
        <common-header></common-header>
        <div class="loginbox" style="margin-top: 1.92rem;">
            <div class="item">
                <span>手机号:</span><input type="text" placeholder="请输入手机号" v-model="phone">
            </div>
            <div class="item">
                <span>密&nbsp;&nbsp;&nbsp;码:</span><input type="text" placeholder="请输入密码" v-model="password">
            </div>
            <div class="forgetpwd">
                <a href="javascript:void(0);">忘记密码</a>
            </div>
            <div class="btn">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
// 大括号内的变量名必须与抛出名称一致
import {requestLogin} from "../until/request"

import {mapActions} from "vuex"
export default {
    data() {
        return {
            phone:"",
            password:"",
            user:{}
        }
    },
    methods: {
        ...mapActions(['changeInfoAction','changeIsloginAction']),
        login:function(){
            if(this.phone==""){
                this.changeInfoAction("请输入手机号");
                return;
            }
            if(this.password==""){
                this.changeInfoAction("请输入密码");
                return;
            }
            this.user.phone=this.phone;
            this.user.password=this.password;

            // this.user.phone=15168828761;
            // this.user.password=123456;

            requestLogin(this.user).then((res)=>{
                if(res.data.status==1){
                    this.changeInfoAction(res.data.msg);
                    this.changeIsloginAction(true);
                    this.$router.push("/user");
                }else{
                    this.changeInfoAction("登录失败");
                }
            }).catch((error)=>{
                console.log(error);
            })
        }
    },
}
</script>
<style lang="stylus">
    
</style>