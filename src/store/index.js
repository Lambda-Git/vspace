// import 'es6-promise/auto'
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
 
import axios from 'axios'
import {post,get,patch,put} from '../utils/http'
 
export default new vuex.Store({
    state:{
        show:'bbbbbb',
        post:post
    }
})