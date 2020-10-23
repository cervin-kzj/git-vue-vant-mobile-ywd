<template>
    <div class="wrap" style="overflow-x: hidden;">
        <indexBanner></indexBanner>
        <div class="container">
            <!-- 父传子 -->
            <indexCateItem v-for="(item,index) in indexData" :key="index" :indexdt="item"></indexCateItem>
        </div>
        <!-- 格式一 -->
        <!-- <commonFooter></commonFooter> -->
        
        <!-- 格式二 -->
        <common-Footer></common-Footer>
    </div>
</template>
<script>
import {requestIndexData} from "../until/request"
import indexCateItem from "../components/indexCateItem"
import indexBanner from "../components/indexBanner"
import store from '../store'
export default {
    components:{
        indexCateItem:indexCateItem,
        indexBanner:indexBanner
    },
    
    mounted() {
        // 首页数据缓存处理方式
        if(store.getters.indexdata==null){
            requestIndexData().then((res)=>{
                if(res.data.success==true){
                    this.indexData=res.data.data;
                    store.dispatch("changeIndexDataAction",res.data.data);
                }else{
                    console.log(res.data.msg);
                }
            }).catch((error)=>{
                console.log(error);
            });
        }else{
            this.indexData=store.getters.indexdata
        }
    },
    data() {
        return {
            indexData:""
        }
    },
}
</script>
<style lang="stylus">
    
</style>