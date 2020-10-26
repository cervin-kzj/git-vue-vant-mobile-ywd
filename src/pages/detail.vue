<template>
    <div class="wrap" style="background-color: #eee; position: relative;">
        <div class="goods_banner">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in detail.swiperImgArr" :key="index">
                    <img v-lazy="image"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="goods_info">
            <div class="goods_info_top">
                <div class="goods_name">
                    <h3>{{detail.name}}</h3>
                </div>
                <div class="goods_collection is_collection">
                    <img src="../assets/images/collection.png" alt="">
                    <span>收藏</span>
                </div>
            </div>
            <div class="goods_info_bottom">
                <div class="pricing">
                    <span class="p-price clearfix">
                        <span class="price">{{detail.reduct_price | filterPrice(2,"¥")}}</span>
                    </span>
                    <span class="origin_price">
                        <del>{{detail.original_price | filterPrice(2,"¥")}}</del>
                    </span>
                </div>
                <div class="goods_more_prom">
                    <div class="goods_preferential clearfix">
                        <span>{{(detail.allowance*10).toFixed(1)}}折</span>
                        <span v-show="detail.isFreeShip">包邮</span>
                    </div>
                    <div class="goods_tag clearfix">
                        <span v-for="(item,index) in detail.describe" :key=index>{{item}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods_box">
            <ul class="show_item clearfix">
                <!-- 动态类名 -->
                <li @click="isShow=true" :class="[isShow==true?'active':'']"><span>商品详情</span></li>
                <li @click="isShow=false" :class="[isShow==false?'active':'']"><span>买家口碑</span></li>
            </ul>
            <div class="show_detail" id="goods_detail" v-if="isShow">
                <img v-for="(item,index) in detail.shopDes" :key=index :src="item" alt="" style="width: 100%;">
            </div>
            <div class="show_detail" id="buying_show" v-else>
                <ul class="evaluate_type clearfix">
                    <li v-for="(item,index) in buyerReviewsArr" :key=index
                    :class="[index==selectIndex?'active':'']"
                    @click="selectIndex=index"
                    >{{item}}</li>
                </ul>
                <div class="evaluate_wrap">
                    <ul class="evaluate_list">
                        <evalute 
                        v-for="(item,index) in comments"
                        :info=item
                        :key=index
                        ></evalute>
                    </ul>
                </div>
            </div>
        </div>
        <footer class="cart_footer">
            <div class="cart_amount">
                <span class="cart_price_title">总价：</span>
                <span class="price">{{cart_price | filterPrice(2,"¥")}}</span>
            </div>
            <button class="addtocart" @click="isAdd=true">显示属性</button>
            <button class="buynow" @click="addShop">加入购物车</button>
        </footer>
        <go-Back></go-Back>
        <v-picker v-if="isAdd" @close="isAdd=false" :info="detail" @getnum="getnum"></v-picker>
    </div>
</template>
<script>
import evalute from "../components/evaluate"
import vPicker from "../components/picker"
import {requestDetailData} from "../until/request"
// import {mapActions,mapGetters} from "vuex"

export default {
    components:{
        evalute:evalute,
        vPicker:vPicker
    },
    methods: {
        // ...mapActions(['addShopAction','changeInfoAction','updateShopAction']),
        // ...mapGetters(['shopping']),
        addShop:function(){
            let arr = this.detail.buySelect.map(item => {
                return item.list[item.num];
                // return item.num;
            });
            // console.log(arr);
            let item={
                img: this.detail.swiperImgArr[0],
                name: this.detail.name,
                price: this.detail.reduct_price,
                num: this.goodsNumber,
                buySelect: arr,
                checked: false,
                pid: this.detail.pid
            }
            
            this.addShopAction(item);
            this.cart_price=0;
            this.shopping().forEach((item)=>{
                this.cart_price+=item.price*item.num;
            });
            this.isAdd=false;
            this.changeInfoAction("加入成功");
            // console.log(this.shopping());
        },
        getnum:function(value){
            console.log(value);
            this.goodsNumber=value;
            // this.cart_price=this.detail.reduct_price*value;
            // console.log(this.cart_price);
        }
    },
    data() {
        return {
            detail:{},
            isShow:true,
            buyerReviewsArr:['全部评价','好评','差评','晒单'],
            selectIndex:0,// 评价类型选中
            isAdd:false,
            cart_price:0.00,
            goodsNumber:1,
        }
    },
    mounted() {
        this.cart_price=0;
        this.shopping().forEach((item)=>{
            this.cart_price+=item.price*item.num;
        });
        // console.log(this.cart_price);

        if(this.$route.params.id=="" || typeof (this.$route.params.id) !="string"){
            this.$router.push("/index");
            return;
        }
        requestDetailData(this.$route.params.id).then((res)=>{
            if(res.data.success!=true){
                this.$router.push("/index");
                return;
            }
            this.detail=res.data.data;
            this.detail.buySelect.forEach((item)=>{
                item.num=0;
            });
        }).catch((error)=>{
            console.log(error);
        })
    },
    computed: {
        comments(){
            let arr=['all','good','bad','postForm'];
            if(this.detail.buyerReviews!=undefined){
                return this.detail.buyerReviews[arr[this.selectIndex]];
            }
            else{
                return [];
            }
        }
    },
}
</script>
<style lang="stylus">
    .price
        color: #eb2222;
    .van-swipe,.van-swipe-item img
        width 100%
        height 100%
</style>