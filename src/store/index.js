import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

import user from "./Modules/user"

export default new vuex.Store({
    modules: {
        user
    }
})