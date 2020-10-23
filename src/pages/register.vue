<template>
    <div class="wrap">
        <common-header></common-header>
        <div class="loginbox" style="margin-top: 1.15rem;">
            <div class="item">
                <span>手机号:</span>
                <input type="text" placeholder="请输入手机号" v-model="phone">
            </div>
            <div class="item">
                <span>密&nbsp;&nbsp;&nbsp;码:</span>
                <input type="text" placeholder="请输入密码" v-model="password">
            </div>
            <div class="item">
                <span>验证码:</span>
                <input type="text" placeholder="请输入验证码">
                <span class="sendcode">点击获取</span>
            </div>
            <div class="btn reg">
                <button @click="register()">下一步</button>
            </div>
            <!-- 测试用无意义{{info}} -->
            <div class="agreement clearfix">
                <input type="checkbox" v-model="checked">
                <span>我已阅读并同意使用<a>条款和隐私政策</a></span>
            </div>
        </div>
    </div>
</template>
<script>
import {requestRegiser} from "../until/request"
import {mapActions} from "vuex"

// import { mapGetters} from "vuex"
// 测试用无意义

export default {
    data() {
        return {
            phone:"",
            password:"",
            verification:"",
            checked:false,
            user:{}
        }
    },
    // 测试用无意义
    // computed: {
    //     ...mapGetters(['info']),
    // },
    methods: {
        ...mapActions(['changeInfoAction']),
        register:function(){
            if(this.phone==''){
                this.changeInfoAction("请输入手机号");
                return;
            }
            if(!(/^1[3456789]\d{9}$/.test(this.phone))){
                this.changeInfoAction("请输入正确格式的手机号");
                return;
            }
            if(this.password==''){
                this.changeInfoAction("请输入密码");
                return;
            }
            if(this.checked==false){
                this.changeInfoAction("请同意注册协议");
                return;
            }
            this.user.phone=this.phone;
            this.user.password=this.password;

            this.user.phone="15168828761";
            this.user.password="123456";

            requestRegiser(this.user).then((res)=>{
                if(res.data.status==1){
                    this.changeInfoAction("注册成功");
                    this.$router.push("/login");
                }
                else{
                    this.changeInfoAction(res.data.msg);
                }
            }).catch((error)=>{
                console.log(error);
            })
        },
    },
}
</script>
<style lang="stylus">
    
</style>