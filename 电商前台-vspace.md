# 									电商前台-vspace

## 一：平台前端框架介绍

#### 1、Node.js

```
	简单的说 Node.js 就是运行在服务端的 JavaScript。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型,使其轻量又高效。速度非常快，性能非常好。Node.js 的包管理器 npm,是全球最大的开源库生态系统。
	应用场景：
		实时应用：如在线聊天，实时通知推送等等（如socket.io）
    分布式应用：通过高效的并行I/O使用已有的数据
    工具类应用：海量的工具，小到前端压缩部署（如grunt），大到桌面图形界面应用程序
    游戏类应用：游戏领域对实时和并发有很高的要求（如网易的pomelo框架）
    利用稳定接口提升Web渲染能力
    前后端编程语言环境统一：前端开发人员可以非常快速地切入到服务器端的开发（如著名的纯Javascript全栈式MEAN架构）

```

#### 2、vue.js(2.0)

```
	Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。	Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和 Vue 生态系统支持的库开发的复杂单页应用。
	Vue.js主要优点：
	1、响应的数据绑定，每当修改数据，DOM便相应的更新。这样我们应用中的逻辑就几乎都是直接修改数据，不必与DOM更新搅在一起，这让我们的代码更容易撰写、理解与维护。
	2、组件系统让我们可以用 独立可复用的小组件来构建大型应用。
	3、特性：简洁（不需要像angualr那样建议服务、Controller、过滤器）、数据驱动(以观测者来实现的单项数据流)、组件化、轻量快速（压缩后15K，相比angualr差了15倍）、模块友好。
	4、vue和react虚拟DOM的Diff算法的复杂度从O(n^3)降到了O(n)。
```

#### 3、element ui

```
	Element UI是一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库，了解设计指南,帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。提供了配套设计资源，帮助你的网站快速成型。由饿了么公司前端团队开源。
	设计原则：
	1.一致性 Consistency,与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
	2.反馈 Feedback,控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
	3.效率 Efficiency,简化流程：设计简洁直观的操作流程；清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
	4.可控 Controllability,用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
```

## 二： 开发环境搭建

#### 	步骤一：全局安装Node.js

​		Node.js 安装包及源码下载地址为：https://nodejs.org/zh-cn/download/。

![](./md-img/image-20220716161748716.png)

   根据自己的电脑选择对应的安装包；下载完安装包之后直接安装；

​	安装好之后检查node安装情况：打开电脑命令行窗口输入 node -v 回车即可看到当前安装node 版本

![](/Users/zhouguilin/Desktop/md-img/image-20220716170841818.png)

#### 步骤二：安装vue-cli脚手架

​	输入命令：npm install --global vue-cli 回车；验证是否安装成功，在命令输入vue，出来vue的信息，及说明安装成功；

#### 步骤三：初始化一个vue项目

​	新建个workspace文件夹，通过命令行窗口进入到workspace目录下；输入：vue init webpack vspace

![](./md-img/image-20220716164922898.png)

​	出现这样的提示，初始化成功

![](./md-img/image-20220716165444909.png)

​	根据提示输入运行项目

```
$ cd vspace
$ npm install
$ npm run dev
```

​	显示如下图，表示项目启动成功：

![image-20220716171345033](./md-img/image-20220716171345033.png)

​	在浏览器中输入 http://localhost:8081 回车：

![image-20220716171712371](./md-img/image-20220716171712371.png)

#### 步骤四：安装 elementUI

​	在vspace根目录下输入： npm i element-ui -S；出现如下图表示安装完成

![image-20220716202129230](./md-img/image-20220716202129230.png)

​	在main.js中加入以下代码全局引入elementUI

```
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

![image-20220716211922634](./md-img/image-20220716211922634.png)

## 三：vspace页面梳理

#### 1、登陆模块

![image-20220716212349834](./md-img/image-20220716212349834.png)

#### 2、注册页面

![image-20220716212613552](./md-img/image-20220716212613552.png)

#### 3、公共header菜单

![image-20220716212736860](./md-img/image-20220716212736860.png)

#### 4、首页

![](./md-img/index.png)

#### 5、会员中心--基本信息页面

![](./md-img/personCenter_userinfo.png)

#### 6、会员中心--修改密码

![image-20220716215204374](./md-img/image-20220716215204374.png)

#### 7、会员中心--订单详情

![](./md-img/orderDetail.png)

#### 8、商品分类页面

![](./md-img/goodsType.png)

#### 9、购买商品页

![](./md-img/buyGoods.png)

#### 10、购物车页面

![](./md-img/carts.png)

#### 11、结算页面

![](./md-img/count.png)

#### 12、收货地址编辑页

![](./md-img/address.png)

#### 13、支付页面

#### 14、支付成功页面

#### 15、支付失败

## 四：vspace项目目录结构

#### (一)、工程目录结构详解

```
     |-- build 构建脚本目录
          |--build.js ---- 生产环境构建脚本
          |--build-server.js ---- 运行本地构建服务器，可以访问构建后的页面
          |--dev-client.js ---- 开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
          |--dev-server.js ---- 运行本地开发服务器
          |--check-version.js ---- 检查npm、node.js版本
          |--utils.js ---- 构建相关工具方法
          |--vue-loader.conf.js ---- 配置css加载器以及编译css之后自动添加前缀
          |--webpack.base.conf.js ---- webpack基本配置
          |--webpack.dev.conf.js ----- webpack开发环境配置
          |--webpack.prod.conf.js ---- webpack生产环境配置
      |-- config：项目配置
          |-- dev.env.js ---- 开发环境变量
          |-- index.js ---- 项目配置文件
          |-- prod.env.js ---- 生产环境变量
          |-- test.env.js ---- 测试环境变量
      |-- node_modules：npm加载项目的依赖模块
      |-- package.json
      |-- src (源码目录,名称不可修改)
          |-- rassets：资源文件，比如存放 css，图片等资源。
          |-- component：组件文件夹，用来存放 vue 的公共组件（注册于全局，在整个项目中通过关键词便可直接输出）
          |-- router:用来存放index.js，这个 js 用来配置路由
          |-- store: 状态管理 vuex
          |-- utils：用来存放工具类 js，将 js 代码封装好放入这个文件夹可以全局调用（比如常见的​ api.js​，​http.js​ 是对 http 方法和 api 方法的封装）。
          |-- views：用来放主体页面，虽然和组件文件夹都是 vue 文件，但 views 下的 vue 文件是可以用来充当路由 view 的。
          |-- main.js:是项目的入口文件，作用是初始化 vue 实例，并引入所需要的插件。
          |-- app.vue:是项目的主组件，所有页面都是在该组件下进行切换的。
      |-- static 静态资源目录。不会被webpack构建
      |-- package.json：npm包配置文件，定义项目的npm脚本、依赖包等信息
      |-- README.md：项目的说明文档，markdown格式   
      |-- .gitignore   

```

#### (二)、vue-cli初始化构建：

![](./md-img/image-20220717095310247.png)

## 五：路由配置

​	根据页面梳理，可以开始配置相关页面的路由；

#### (一)、全局注入router

​	找到main.js

```
import router from './router'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

#### (二)、引入具体的page

##### 	1、建立好所需要跳转的page页面：

![](./md-img/image-20220717163039615.png)

##### 2、找到router.js，引入涉及到菜单跳转的页面地址

```vue
import Vue from 'vue'

import Index from '@/pages/Index'
import Login from '@/pages/Login' 
import Register from '@/pages/register'
import PersonalCenter from '@/pages/personalCenter'
import GoodsType from '@/pages/goodsType'
import GoodsDetails from '@/pages/goodsDetails'
import ShoppingCart from '@/pages/shoppingCart'
import Settlement from '@/pages/settlement'
import Paying from '@/pages/paying'
```

#### (三)、路由配置

##### 1、引入路由组件

```
import Router from 'vue-router'
Vue.use(Router)
```

##### 2、配置路由

```vue
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: PersonalCenter
    },
    {
      path: '/goodsType',
      name: 'goodsType',
      component: GoodsType
    },
    {
      path: '/goodsDetails',
      name: 'goodsDetails',
      component: GoodsDetails
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart
    },
    {
      path: '/settlement',
      name: 'settlement',
      component: Settlement
    },
    {
      path: '/paying',
      name: 'paying',
      component: Paying
    },
  ]
})
```



## 六：页面布局设计

#### (一)、整体布局

###### 1、需求背景：

​	1、页面适配显示器屏幕的大小

​	2、不考虑移动端

​	3、中间定宽，两边留白适配，防止浏览器窗口放大缩小内容展示混乱

​	4、高度自适应

###### 2、效果如图

![](./md-img/image-20220717180929619.png)

###### 3、代码实现

​	给父容器添加css代码

```
.pageContent {
  width: 1140px;
  margin: auto;
  padding: 20px 30px;
  height: 72px;
}
```

或者

```
.pesponCenter {
  padding: 20px 0px;
  width: 1200px;
  margin: auto;
  display: flex;
}
```



#### (二)、字体规范

![](./md-img/image-20220717181740388.png)

vspace字体全部为默认 微软雅黑；大小可根据自己是觉察自行调整；主流颜色为#009866，color值也可以根据自行调整深浅；



## 七、http封装

##### 	(一)、reques请求报文 请求包含四部分

1、请求行：动词（GET/POST） 路径(带查询字符串) 协议/版本号（HTTP/1.1这样的）

2、请求头： 一堆 key: value（value前有空格 ）

3、回车 作用只有一个，分离第二部分和第四部分

4、请求体：Body 随便什么内容都可以，但是内容的格式需要在第二部分当中的Contet-type 当中说明

![](./md-img/image-20220717185443865.png)

##### (二)、response 响应报文请求包含四部分

1、响应行：协议/版本号（HTTP/1.1这样的） 状态码 状态信息

2、响应头：一堆 key: value（value前有空格 ）

3、回车 作用只有一个，分离第二部分和第四部分

4、响应体：Body 随便什么内容都可以，但是内容的格式需要在第二部分当中的Contet-type 当中说明

![](./md-img/image-20220717185533112.png)

##### (三)、Vspcae封装http

###### 1、安装axios

```
 npm install axios -g
```

###### 2、main.js注册axios

​	找到main.js 全局引用axios

```
import axios from 'axios'
Vue.prototype.$http = axios;
```

###### 3、新建 http.js 

​	项目目录找到 src =>utils 文件夹新建http.js

```
import axios from 'axios';
// import { Message } from 'element-ui';
// axios.defaults.timeout = 5000;
// axios.defaults.baseURL ='';
 
//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded',
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);
 
//http response 拦截器
axios.interceptors.response.use(
  response => {
  	// console.log(response)
    if(response.data.errCode ==2){
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
 
export function get(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
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
 
 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data,
    	  // {
    	  //     headers: {
       //      	'token': 'Bearer',
    	  //     }
    	  // }
     )
     .then(response => {
       resolve(response.data);
     },err => {
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
 
export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
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
 
export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}
```

###### 4、页面中具体请求接口

```
 this.$http.post("userInfo/login", {
              Ïphone: this.ruleForm.phone,
              code: this.ruleForm.code,
              password: this.ruleForm.password,
            })
            .then((response) => {
              if (response.code === 2000) {
                this.$message({
                  message: response.message,
                  type: "success",
                });
                this.$router.push("/");
              } else {
                this.$message.error(response.message);
              }
            });
```



## 八、注册模块

#### (一)、需求分析

#### (二)、功能模块实现



## 九、登陆模块

#### (一)、需求分析

#### (二)、功能模块实现



## 十、首页

#### (一)、需求分析

#### (二)、功能模块实现



## webpack打包、优化