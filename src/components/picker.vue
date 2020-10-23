<template>
     <div class="detail_sku_v1_main show" @click.self="close" v-if="info.reduct_price!=undefined">
            <div class="main">
                <div class="head">
                    <div class="avt">
                        <img :src="info.swiperImgArr[0]" :alt="info.name" >
                    </div>
                    <p class="price">{{info.reduct_price | filterPrice(2,"¥")}}</p>
                    <p class="goodsnumber">库存{{info.total}}件</p>
                    <i class="check_attr">请选择商品属性</i>
                    <i class="close" @click="close"><img src="../assets/images/close.png" alt=""></i>
                </div>
                <div class="body">
                    <div class="count_choose clearfix">
                        <div class="num_wrap_v2 clearfix">
                            <span class="minus" @click="dec">-</span>
                            <div class="text_wrap"><input type="text" :value="num"></div>
                            <span class="plus" @click="inc">+</span>
                        </div>
                        <p class="count">购买数量</p>
                    </div>
                    <div class="popupSkuArea">
                        <div class="sku_box" v-for="(item,index) in info.buySelect" :key="index">
                            <div class="sku_kind">{{item.name}}</div>
                            <div class="sku_choose">
                                <span  v-for="(items,i) in item.list" 
                                @click="skucheck(index,i)"
                                :key="i" 
                                :class="[item.num==i?'item active':'item']">{{items}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    props:['info'],
    methods: {
        skucheck:function(index,i){
            // 因为传递的是复杂结构类型数据,所以可以修改父组件传过来的数据
            var json=this.info.buySelect[index];
            json.num=i;
            // 为什么没有渲染
            // 放回去:splice、vm.$set、Vue.set
            this.$set(this.info.buySelect,index,json);
        },
        close:function(){
            this.$emit("close");
        },
        dec:function(){
            if(this.num>1){
                this.num--;
            }else{
                this.num=1;
            }
            // console.log(this.num);
            this.$emit("getnum",this.num);
        },
        inc:function(){
            this.num++;
            this.$emit("getnum",this.num);
        }
    },
    data() {
        return {
            num:1
        }
    },
}
</script>
<style lang="">
    
</style>