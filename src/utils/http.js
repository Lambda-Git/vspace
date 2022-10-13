import axios from 'axios';
import Cookies from 'js-cookie'
// import { Message } from 'element-ui';
// axios.defaults.timeout = 5000;
// 本地开发 调试
// axios.defaults.baseURL ='http://3ea5443a.cpolar.cn/';

const instance = axios.create({
  // baseURL 将自动加在 url`前面，除非 url 是一个绝对 URL。
  // 它可以通过设置一个 baseURL 便于为 axios 实例的方法传递相对 URL
  baseURL: "http://3ea5443a.cpolar.cn/",
  // timeout设置一个请求超时时间，如果请求时间超过了timeout，请求将被中断，单位为毫秒（ms）
  timeout: 60000,
  // headers是被发送的自定义请求头，请求头内容需要根据后端要求去设置，这里我们使用本项目请求头。
  headers: {
    'Accept': 'application/json',
    'token': Cookies.get('token'),
  }
})


//http request 拦截器
instance.interceptors.request.use(
  config => {
    const token = Cookies.get('token'); //注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    if (token) {
      config.params = { 'token': token }
    }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
instance.interceptors.response.use(
  response => {
    // console.log(response)
    if (response.data.errCode == 2) {
      // router.push({
      //   path:"/login",
      //   querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      // })
    }
    return response.data;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */


export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data,
      // {
      //     headers: {
      //      	'token': 'Bearer',
      //     }
      // }
    )
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}