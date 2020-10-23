<template>
    <!-- 杭州保税区仓 -->
    <div class="section">
            <div class="head_wrap">
                <i class="icon_shop"><img src="../assets/images/store.png"></i>
                <h3>杭州保税区仓</h3>
            </div>
            <div class="item">
                <div class="goods">
                    <input type="checkbox" v-model="info.checked">
                    <img :src="info.img" :alt="info.name" class="image">
                    <div class="content">
                        <h4 class="name">{{info.name}}
                            <span class="specs" v-for="(item,index) in info.buySelect" :key="index">{{item}}</span>
                        </h4>
                        <div class="num_wrap">
                            <span class="minus" @click="dec(index)">-</span>
                            <div class="text_wrap"><input type="text" :value="info.num"></div>
                            <span class="plus" @click="inc(index)">+</span>
                        </div>
                    </div>
                    <div class="price">
                        {{info.num*info.price | filterPrice(2,"¥")}}
                    </div>
                </div>
                <div class="del" @click="del(index)">删除</div>
            </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex"
export default {
    props:['info','index'],
    data() {
        return{

        }
    },
    methods: {
        ...mapActions(['updateShopAction','deleteShopAction']),
        ...mapGetters(['shopping']),
        dec:function(index){
            this.info.num--;
            if(this.info.num<=1){
                this.info.num=1;
            }
            this.updateShopAction({_idx:index,num:this.info.num});
        },
        inc:function(index){
            this.info.num++;
            this.updateShopAction({_idx:index,num:this.info.num});
        },
        del:function(index){
            this.deleteShopAction({_idx:index});
        }
    },
}
</script>
<style lang="">
    
</style>