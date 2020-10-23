<template>
    <div class="cateitem">
        <div class="catetitle">
            <img src="../assets/images/hot.png" alt="">
            <span>{{indexdt.name}}</span>
        </div>
        <div class="index_goodsbox">
            <ul class="goodslist">
                <li v-for="(data,idx) in indexdt.list" :key="idx" @click="jumpurl(data.id)">
                    <img :src="data.thumbnail" :alt="data.name">
                    <div class="index_pricing">
                        <span class="index_p-price">{{data.reduct_price | filterPrice(2,"$")}}</span>
                        <span class="index_origin_price"><del>{{data.original_price | filterPrice(2,"¥")}}</del></span>
                    </div>
                    <h3 class="name">{{data.name}}</h3>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:['indexdt'],
    methods: {
        jumpurl:function(id){
            this.$router.push("/detail/"+id);
        }
    },
}
</script>
<style lang="">
    
</style>