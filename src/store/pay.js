export default {
    state: {
        str: 'pay'
    },
    mutations: {
        'paySetStr': function (state, s) {
            console.log('girl 的 setStr');
            state.str = s;
        }
    },
    actions: {
        'paySetStr': function ({ commit }, s) {
            commit('paySetStr', s);
        }
    }
}