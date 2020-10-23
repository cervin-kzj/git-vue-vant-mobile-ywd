import axios from 'axios'
import qs from "qs"
// 请求拦截
axios.interceptors.request.use((config) => {
    if(config.method.toUpperCase()=="POST"){
        config.data=qs.stringify(config.data);
    }
    // console.log("请求拦截:"+config);
    return config;
});
// 响应拦截
axios.interceptors.response.use(res=>{
    // console.log("响应拦截:"+res.config.url);
    // console.log(res);
    return res;
});
const baseUrl="/api";

// 注册请求
export const requestRegiser=(user)=>{
    return axios({
        url:baseUrl+"/register",
        method:"post",
        data:user
    })
};

// 登录请求
export const requestLogin=(user)=>{
    return axios({
        url:baseUrl+"/login",
        method:"get",
        params:user
    });
};

// 首页数据请求
export const requestIndexData=()=>{
    return axios({
        url:baseUrl+"/getIndexData",
        method:"get"
    });
};

// 详情页数据请求
export const requestDetailData=(pid)=>{
    return axios({
        url:baseUrl+"/getDetails",
        method:"get",
        params:{
            pid
        }
    })
}

// 报错(错误抛出) 没有对外提供接口
// exprot 1;

// 报错(错误抛出) 没有对外提供接口
// let m=1;
// export m;

// 正确抛出
// export let m=1; 