import { requestIndexData } from "../../until/request"
const state = {
    homeData: []
}
const mutations = {
    setIndexDataInfoAction(state, arr) {
        state.homeData = arr
    }
}
const actions = {
    setIndexDataInfoAction(context) {
        try {
            requestIndexData().then((res) => {
                context.commit('setIndexDataInfoAction', res.data.data)
            })
        }
        catch (e) {
            console.warn(e)
        }
    }
}

const getters = {
    getHomeData(state) {
        return state.homeData
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}

