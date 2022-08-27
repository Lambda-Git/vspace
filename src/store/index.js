// import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import boy from './card';
import girl from './pay';
Vue.use(Vuex);

import axios from 'axios'
import { post, get, patch, put } from '../utils/http'

const store = new Vuex.Store({
    strict: process.env.NODE_ENV != 'production',
    state: { 
        str: 'liangzai', 
        car: [],  // 购物车 临时存储数据
        settlementList:[] // 结算列表临时存储数据
     },
    getters: {
        // 计算购物车 徽标的数值
        getAllCount(state) {
            // console.log('计算购物车')
            // console.log(state.car)
            var c = 0
            state.car.forEach(item => {
                if (item.id) {
                    c += 1
                }
            })
            return c
        },
        couples(state) {
            return `${state.boy.str} && ${state.girl.str}`;
        }
    },
    mutations: {
        // 点击加入购物车，会将信息保存到 store 中的 car
        addCar(state, goodsInfo) {
            var flag = false
            state.car.some(item => {
                if (item.id && item.id === goodsInfo.id) {
                    item.count += parseInt(goodsInfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsInfo)
            }
            console.log('JSON.stringify(state.car)')
            console.log(JSON.stringify(state.car))
            if (JSON.stringify(state.car) !== 'null') {
                console.log(21221)
                console.log(JSON.stringify(state.car))
                localStorage.setItem('car', JSON.stringify(state.car))
            }
        }
    },
    modules: {
        boy,
        girl
    }
});

export default store

