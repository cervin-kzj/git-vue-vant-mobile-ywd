import { requestLogin } from "../../until/request"
/**
 * react
 */
// const initState = {
//     userInfo: {}
// }
/**
 * vue
 */
const state = {
    userInfo: {},
    isLogin: false
}

/**
 * react 可以处理异步
 * @param {*} userInfo 
 */
// const changeUserInfoAction = (userInfo) => {
//     return {
//         type: "changeUserInfoAction",
//         userInfo: userInfo
//     }
// }
/**
 * vue 可以处理异步
 */
const actions = {
    changeUserInfoAction(context, userInfo) {
        context.commit('changeUserInfoAction', userInfo)
    },
    changeIsloginAction(context, userInfo) {
        try {
            return new Promise(async (resolve, reject) => {
                // requestLogin(userInfo).then((res) => {
                //     if (res.data.status == 1) {
                //         context.commit('changeIsloginAction', true)
                //         context.commit('changeUserInfoAction', userInfo)
                //         resolve();
                //     } else {
                //         reject();
                //     }
                // })

                let response = await requestLogin(userInfo);
                if (response.data.status == 1) {
                    context.commit('changeIsloginAction', true)
                    context.commit('changeUserInfoAction', userInfo)
                    resolve(response.data.msg);
                } else {
                    reject(response.data.msg);
                }
            });
        }
        catch (e) {
            console.warn(e);
        }
    }
}

/**
 * react
 */
// export const reducer = (state=initState,action) => {
//     switch (action.type) {
//         case "":
//             return;
//             break;
//     }
// }
/**
 * vue
 */
const mutations = {
    changeUserInfoAction(state, userInfo) {
        state.userInfo = userInfo
    },
    changeIsloginAction(state, isLogin) {
        state.isLogin = isLogin

    }
}

/**
 * react
 * @param {*} state
 */
// export const getUserInfo = (state) => {
//     return state.user.userInfo;
// }
/**
 * vue
 */
const getters = {
    getUserInfo(state) {
        return state.userInfo
    },
    getIsLogin(state) {
        return state.isLogin
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}