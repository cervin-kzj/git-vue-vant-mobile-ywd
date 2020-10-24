// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 静态资源
import "./assets/css/reset.css"
import "./assets/css/public.css"
import "./assets/css/style.css"
import "./assets/js/scale.js"
import "./assets/js/html5shiv.js"

// Vant配置
import Vant, { Lazyload } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Lazyload);

// 全局过滤器 import命令可以使用任意名称指向./filter/index.js 不需要知道模块输出的函数名 此时的import命令不需要{}
import filter from './filter/index.js'
for (let i in filter) {
  Vue.filter(i, filter[i]);
}

// 公共组件
import commonComponent from './common/index.js'
for (let i in commonComponent) {
  Vue.component(i, commonComponent[i]);
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log(store.getters.islogin);
    // if(store.getters.islogin) {
    //   next();      
    // }
    // else{
    //   next('/login'); 
    // }
    next();
  }
  else {
    next();
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
