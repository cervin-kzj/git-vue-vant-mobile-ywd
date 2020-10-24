<template>
<div class="wrap"><!-- style="overflow-x: hidden;" -->
        <common-Header></common-Header>
        <div class="cart_box">
            <cartGoodsItem v-for="(item,index) in this.shopping()" :key="index" :info="item" :index="index"></cartGoodsItem>
        </div>
        <div class="checkout_box">
            <div class="checkout_cart">
                <span class="chkall">
                    <input type="checkbox" v-model="checkAll">
                    <i>全选</i>
                </span>
                <!-- <span class="edit">
                    <input type="checkbox">
                    <i>编辑</i>
                </span> -->
                <span class="amount">
                    <em>合计:{{total | filterPrice(2,"¥")}}</em>
                    <br>
                    <em>(不含运费)</em>
                </span>
            </div>
            <button @click="checkout()">去结算</button>
        </div>
        <common-Footer></common-Footer>
    </div>
</template>
<script>
import cartGoodsItem from "../components/cartGoodsItem"
import {mapGetters,mapActions} from "vuex"
export default {
    components:{
        cartGoodsItem:cartGoodsItem
    },
    methods: {
        ...mapGetters(['shopping']),
        ...mapActions(['changeInfoAction']),
        checkout:function(){
            let bool=this.cartArr.every((item)=>{
                return item.checked == false
            });
            if(bool==true){
                this.changeInfoAction("请选择要结算的商品");
            }
        }
    },
    mounted(){
        this.shopping().forEach((item,index)=>{
            this.cart_price+=item.price*item.num;
        });
        this.cartArr=this.shopping();
    },
    data() {
        return {
            cart_price:0,
            cartArr:[],
        }
    },
    computed: {
        checkAll: {
            get() {
                let bool;
                if(this.cartArr.length>0){
                    bool = this.cartArr.every((item) => {
                        return item.checked == true
                    })
                }else{
                    bool=false;
                }
                return bool;
            },
            set(newVal) {
                this.cartArr.forEach(item => {
                    item.checked = newVal
                })
            }
        },
        total() {
            let price = 0;
            this.cartArr.forEach(item => {
                if (item.checked == true) {
                    price += item.price * item.num
                }
            })
            return price;
        }
    }
}
</script>
<style lang="stylus">
    
</style>