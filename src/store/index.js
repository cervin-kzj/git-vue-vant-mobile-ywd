import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

import user from "./Modules/user"
import home from "./Modules/home"

export default new vuex.Store({
    modules: {
        user,
        home
    }
})