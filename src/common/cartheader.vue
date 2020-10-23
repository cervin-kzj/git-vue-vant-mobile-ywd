<template>
        <header class="cart_header">
            <span class="cart_navback" @click="goback()">
                <img src="../assets/images/nav_icon_back@2x.png">
            </span>
            <h2 class="pagetitle">{{this.$route.name}}</h2>
        </header>
</template>
<script>
export default {
    methods: {
        goback:function(){
            this.$router.go(-1);
        }
    },
}
</script>
<style lang="">
    
</style>