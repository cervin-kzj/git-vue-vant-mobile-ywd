import Vue from 'vue'
import Router from 'vue-router'

// 引入路由组件(懒加载)
const cart=()=>{
  return import("../pages/cart")
}
const detail=()=>{
  return import("../pages/detail")
}
const index=()=>{
  return import("../pages/index")
}
const login=()=>{
  return import("../pages/login")
}
const register=()=>{
  return import("../pages/register")
}
const user=()=>{
  return import("../pages/user")
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/cart",
      name:"购物车",
      component:cart
    },
    {
      path:"/detail/:id",
      component:detail
    },
    {
      path:"/index",
      component:index
    },
    {
      path:"/login",
      name:"登录",
      component:login
    },
    {
      path:"/register",
      name:"注册",
      component:register
    },
    {
      path:"/user",
      name:"个人中心",
      meta:{
        requiresAuth:true
      },
      component:user,
    },
    {
      path:"*",
      redirect:"/login"
    }
  ]
})
