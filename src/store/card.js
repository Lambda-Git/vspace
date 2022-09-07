export default {
    state: {
        str: 'card'
    },
    mutations: {
        'cardetStr': function (state, s) {
            console.log('card 的 setStr');
            state.str = s;
        }
    },
    actions: {
        'cardSetStr': function ({ commit }, s) {
            commit('cardSetStr', s);
        }
    }
}