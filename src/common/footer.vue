<template>
  <footer class="footer">
    <van-tabbar route>
      <van-tabbar-item to="/index">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.activeIndex : icon.inactiveIndex" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="">
        <span>分类</span>
        <template #icon="props">
          <img :src="props.active ? icon.activeMeun : icon.inactiveMeun" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/cart">
        <span>购物车</span>
        <template #icon="props">
          <img :src="props.active ? icon.activeCart : icon.inactiveCart" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/user">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.activeUser : icon.inactiveUser" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </footer>
</template>
<script>
// 把静态资源当成变量引入 webpack打包会把路径转成base64

import indexNor from "../assets/images/tab_home_nor.png";
import menuNor from "../assets/images/tab_menu_nor.png";
import cartNor from "../assets/images/tab_shopping_nor.png";
import userNor from "../assets/images/tab_me_nor.png";

import indexHig from "../assets/images/tab_home_hig.png";
import menuHig from "../assets/images/tab_menu_hig.png";
import cartHig from "../assets/images/tab_shopping_hig.png";
import userHig from "../assets/images/tab_me_hig.png";

import { Tabbar, TabbarItem } from "vant";
export default {
  data() {
    return {
      active: 0,
      icon: {
        activeIndex: indexHig,
        inactiveIndex: indexNor,

        activeMeun: menuHig,
        inactiveMeun: menuNor,

        activeCart: cartHig,
        inactiveCart: cartNor,

        activeUser: userHig,
        inactiveUser: userNor,
      }
    };
  },
};
</script>
<style lang="">
.van-tabbar {
  height: 1.04rem;
}
.van-tabbar-item__icon img {
  width: 0.42rem;
  height: 0.42rem;
}
.van-tabbar-item--active {
  color: #ff9900;
}
.van-tabbar-item {
  font-size: 0.22rem;
}
</style>