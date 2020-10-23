<template>
    <footer class="footer">
            <ul class="footer_nav">
                <li is="router-link" to="/index" active-class="on">
                    <!-- 栏目选中 logo切换 实现步骤-->
                    <img :src="$route.path==='/index'?footerNavItem.indexHig:footerNavItem.indexNor" alt="">
                    <span>首页</span>
                </li>
                <li>
                    <img src="../assets/images/tab_menu_nor.png" alt="">
                    <span>分类</span>
                </li>
                <li is="router-link" to="/cart" active-class="on">
                    <img :src="$route.path==='/cart'?footerNavItem.cartHig:footerNavItem.cartNor" alt="">
                    <span>购物车</span>
                </li>
                <li is="router-link" to="/user" active-class="on">
                    <img :src="$route.path==='/user'?footerNavItem.userHig:footerNavItem.userNor" alt="">
                    <span>我的</span>
                </li>
            </ul>
    </footer>
</template>
<script>
// 把静态资源当成变量引入 webpack打包会把路径转成base64

import indexNor from "../assets/images/tab_home_nor.png";
import cartNor from "../assets/images/tab_shopping_nor.png";
import userNor from "../assets/images/tab_me_nor.png";

import indexHig from "../assets/images/tab_home_hig.png";
import cartHig from "../assets/images/tab_shopping_hig.png";
import userHig from "../assets/images/tab_me_hig.png"


export default {
    data() {
        return {
            footerNavItem:{
                indexNor,
                cartNor,
                userNor,
                indexHig,
                cartHig,
                userHig
            }
        }
    },
}
</script>
<style lang="">
    
</style>