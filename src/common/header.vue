<template>
    <header class="header">
        <span class="navback" @click="goback()">
            <img src="../assets/images/nav_icon_back@2x.png">
        </span>
        <h2 class="pagetitle">{{this.$route.name}}</h2>
        <span class="position"></span>
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