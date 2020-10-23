<template>
    <header class="header">
            <span class="usernav" @click="goback()">
                <img src="../assets/images/set.png">
            </span>
            <h2 class="pagetitle">{{this.$route.name}}</h2>
            <span class="usernav">
                <img src="../assets/images/news.png">
            </span>
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