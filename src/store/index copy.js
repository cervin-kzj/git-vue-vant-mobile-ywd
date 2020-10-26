import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

const state={
    info:null,
    islogin:false,// 当前用户登录状态,默认 未登录islogin:false,登录islogin:true
    indexData:null,// 首页数据
    shopping:[]// 保存购物车数据
};

const mutations={
    changeInfo:function(state,info){
        state.info=info;
    },
    changeIslogin:function(state,info){
        state.islogin=info;
    },
    changeIndexData:function(state,info){
        state.indexData=info;
    },
    addShop:function(state,info){
        state.shopping.unshift(info);
    },
    updateShop:function(state,info){
        state.shopping[info._idx].num=info.num;
    },
    deleteShop:function(state,info){
        state.shopping.splice(info._idx,1);
    }
};

const actions={
    changeInfoAction:function(content,info){
        content.commit("changeInfo",info);
    },
    changeIsloginAction:function(content,info){
        content.commit("changeIslogin",info);
    },
    changeIndexDataAction:function(content,info){
        content.commit("changeIndexData",info);
    },
    addShopAction:function(content,info){
        content.commit("addShop",info);
    },
    updateShopAction:function(content,info){
        content.commit("updateShop",info);
    },
    deleteShopAction:function(content,info){
        content.commit("deleteShop",info);
    }
};

const getters={
    info:function(state){
        return state.info;
    },
    islogin:function(state){
        return state.islogin;
    },
    indexdata:function(state){
        return state.indexData;
    },
    shopping:function(state){
        return state.shopping;
    }
};

export default new vuex.Store({
    state,
    mutations,
    actions,
    getters
});