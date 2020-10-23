<template>
    <div class="goods_goback" @click="goback">
            <img src="../assets/images/nav_icon_back@2x.png" alt="">
    </div>
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