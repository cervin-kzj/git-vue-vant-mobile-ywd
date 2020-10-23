<template>
    <li>
        <div class="evaluate_head clearfix">
            <span class="user">{{info.buyerName}}</span>
            <span class="addtime">{{info.createTime | filterTime(1)}}</span>
        </div>
        <ul class="evaluate_thumb clearfix">
            <li v-for="(item,index) in info.postImg" :key="index">
                <img :src="item">
            </li>
        </ul>
        <p class="evaluate_info">{{info.postDescribe}}</p>
        <p class="evaluate_answer">{{info.adminReviews}}</p>
    </li>
</template>
<script>
export default {
    props:['info']
}
</script>
<style lang="">
    
</style>