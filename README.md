# vspace

> 蔬菜电商平台

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 1 广告模块： 

## 1.1 广告内容查询

```
请求:/read_content   
请求方式： get
参数：id       id为广告分类得id
返回值：json
```

返回值具体格式： 【重点字段pic】

```
[
  {
    "categoryId": 1,
    "gmtCreate": 1654530895000,
    "gmtModified": 1654530895000,
    "id": 1,
    "isDeleted": 0,
    "pic": "http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhWiAQ5drAADNRp6CnCg140.jpg",
    "sortOrder": 1,
    "title": "首页广告",
    "url": "http://www.baidu.com",
    "userModified": "admin"
  },
  {
    "categoryId": 1,
    "gmtCreate": 1654530896000,
    "gmtModified": 1654530896000,
    "id": 2,
    "isDeleted": 0,
    "pic": "http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhaKAZ0haAAFwk9Ak1lM803.jpg",
    "sortOrder": 1,
    "title": "前台首页",
    "url": "http://www.baidu.com",
    "userModified": "admin"
  },
  {
    "categoryId": 1,
    "gmtCreate": 1654530897000,
    "gmtModified": 1654530897000,
    "id": 13,
    "isDeleted": 0,
    "pic": "http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhcmAByrMAAC7ajtL7B8393.jpg",
    "title": "轮播首页",
    "userModified": "admin"
  },
  {
    "categoryId": 1,
    "gmtCreate": 1654612944000,
    "gmtModified": 1654612944000,
    "id": 14,
    "isDeleted": 0,
    "pic": "http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdheOAaKvQAABVdlGldUM421.jpg",
    "title": "轮播首页xxx",
    "userModified": "admin"
  }
]
```

# 2 搜索模块

# 3 购物车模块

## 3.1 添加购物车： 

```
请求:/cartinfo/add   
请求方式：get
参数： Long productId , Integer num 
productId:商品得id 
num：商品得购买数量

返回值：json
```

返回值json具体格式： 

```
{
  "flag":true,
  "code":20000
  "message": "查询成功"
}
```



## 3.2 购物车列表查询

```
请求:/cartinfo/list 
请求方式：get
参数： 无
返回值：map
```

返回值： 

```
{
  orderItemlList:[
     {
      "orderId":"",
      "productName":"烟台樱桃",
      "productCnt":"2" , #购买商品数量
      "totalPrice":"30" ,# 单向商品得总金额
      "fee_money":""#优惠金额
      "productCode":"123432",#商品物理编码
		"其他字段":""
     },
     {
     
     }
  ],
  "totalNum":1,
  "totalPrice": 10000
}
```

## 3.3 商品数量变更

```
请求:/cartinfo/add 
请求方式：get
参数： Long id, Integer num 
id:商品id
num：商品数量
返回值：json
注意： 商品数量变更复用添加购物车方法，重置num得值
```

```
{
  "flag":true,
  "code":20000
  "message": "成功"
}
```

## 3.4 移除购物车

```
请求:/cartinfo/add
请求方式：get
参数： Long id, Integer num 
id:商品id
num：商品数量
返回值：json

注意：移除购物车服用添加购物车方法， 判断num得值如果<=0,直接移除商品购物车
```

```
{
  "flag":true,
  "code":20000
  "message": "成功"
}
```



# 3 订单模块

## 3.1 订单结算页，收货地址查询

```
请求:/address/list 
请求方式：get
参数： 无
返回值：json
```

```
{
	"flag":true,
	"code":20000,
	"message":"查询成功",
	"data":[
	  {
	   "userAddrId":'1',
       "userName":"admin",
       "provinceId":"1",
       "cityId":"1",
       "districtId":"1",
       "detail":"樱花园小区5号楼2单元101",
       "isDefault":"0",
       "isDeleted":"0"
	  },
	  {
	   "userAddrId":'2',
       "userName":"admin",
       "provinceId":"1",
       "cityId":"2",
       "districtId":"2",
       "detail":"香河园中里小区5号楼2单元101",
       "isDefault":"0",
       "isDeleted":"0"
	  },
	  {
	  ...
	  }
	]
}
```

## 3.2 订单列表查询

```
请求:/orderinfo/list 
请求方式：get
参数： Integer currentPage, Integer pageSize
返回值：json
```

```
{
	"total":100,
	"rows":[
	 {
	  "picUrl":'http://192.168.50.50:8080/group01/xx/01/mm.jpg',
	  "orderSign":"10987651234"，
	  "productTitle":"烟台苹果",
	  "totalPrice":'123.5',
	  "paymentMethod":"支付宝",
	  "payStatus":"已支付"
	 },
	  {
	    "picUrl":'http://192.168.50.50:8080/group01/xx/01/mm.jpg',
	  "orderSign":"10987651255"，
	  "productTitle":"烟台鸭梨",
	  "totalPrice":'55.6',
	  "paymentMethod":"支付宝",
	  "payStatus":"已退款"
	 }
	]
}
```



# 5支付模块

## 5.1 下单

下单需要向orderMaster表和orderDetail表添加数据

```
请求:/ali-pay/trade/page/pay
请求方式：post
参数： String productId
返回值：json
```

返回值： 

```
{
 "flag":"true",
 "code":"20000",
 "message":"下单成功",
 "data": formStr 
}

#formStr是支付宝返回得一个js字符串脚本
```

## 5.2 取消订单

```
请求:/ali-pay/trade/close
请求方式：post
参数： String orderSign
返回值：json
```

```
{
 "flag":"true",
 "code":"20000",
 "message":"订单取消成功"
}
```

## 5.3 用户退款

```
请求:/ali-pay/trade/refund
请求方式：post
参数： String orderSign
返回值：json
```

```
{
 "flag":"true",
 "code":"20000",
 "message":"退款成功"
}
```

订单状态： 

```
未支付     0
支付成功   1
超时已关闭  2
用户已取消  3
退款中     4
已退款     5
```

## 5.4 用户获得个人账单【可选择】

```
留作备用
```



# 6 用户模块

## 6.1 用户注册

```
请求:/userInfo/regist
请求方式：post
参数： UserInfo userInfo
返回值：json	
```

json格式如下： 

```
{
 "flag":"true",
 "code":"20000",
 "message":"注册成功",
 "data":null
}
```

## 6.2 用户登录

```
请求:/userInfo/login
请求方式：post
参数： UserInfo userInfo,String code 
返回值：json
```

```
{
 "flag":"true",
 "code":"20000",
 "message":"登录成功",
 "data":null
}
```

## 6.3  查询用户基本信息

```
请求:/userInfo/findById
请求方式：get
参数： String phone 
返回值：json
```

```
{
 "flag":"true",
 "code":"20000",
 "message":"注册成功",
 "data":{
     "phone","18811307278",
     "levelName":"黄金",
     "changePoint":"1001" #用户积分
     "gmtGreate":"2022-09-09" #用户得创建时间
     ...用户得其他信息可参照数据库表获得
 }
}
```

## 6.4 用户密码修改

```
请求:/userInfo/update
请求方式：post
参数： String password,String newPassword 
返回值：json
```

```
{
 "flag":"true",
 "code":"20000",
 "message":"修改密码成功"
}
```

# 7 商品模块

## 7.1 商品一级分类查询

```
请求:/productCategory/findAll
请求方式：get
参数： Long productId
返回值：json
```

```
{
 "flag":"true",
 "code":"20000",
 "message":"查询成功",
 "data":[
   {
     "categoryId","1"
     "categoryName":'水果',
     "parentId":"",
     "categoryLevel":"1",
     "userCreate":"admin",
     "gmtCreate":"2022-09-09 21:21:10",
     "isDeleted":"0",
     "userModified":"",
     "gmtModified":"2022-09-09 21:21:10"
   },
     {
     "categoryId","2"
     "categoryName":'蔬菜',
     "parentId":"",
     "categoryLevel":"1",
     "userCreate":"admin",
     "gmtCreate":"2022-09-09 21:21:10",
     "isDeleted":"0",
     "userModified":"",
     "gmtModified":"2022-09-09 21:21:10"
   }
 ]
}
```



## 7.2 根据一级分类查询二级分类

```
请求:/productCategory/findSecCategory
请求方式：get
参数： Long categoryId  #一级分类得id
返回值：json
```

```
{
 "flag":"true",
 "code":"20000",
 "message":"查询成功",
 "data":[
   {
     "categoryId","13"
     "categoryName":'芒果',
     "parentId":"1",
     "categoryLevel":"2",
     "userCreate":"admin",
     "gmtCreate":"2022-09-09 21:21:10",
     "isDeleted":"0",
     "userModified":"",
     "gmtModified":"2022-09-09 21:21:10"
   },
     {
     "categoryId","14"
     "categoryName":'鸭梨',
     "parentId":"1",
     "categoryLevel":"2",
     "userCreate":"admin",
     "gmtCreate":"2022-09-09 21:21:10",
     "isDeleted":"0",
     "userModified":"",
     "gmtModified":"2022-09-09 21:21:10"
   }
 ]
}
```

## 7.3 促销商品展示

```
请求:/productInfo/promotionProduct
请求方式：get
参数： 无
返回值：json
```

```
{
    "flag":true,
    "code":10000,
    "message":"促销商品查询成功",
    "data":[      
        {
            "productId":1016,
            "productTitle":"潍坊萝卜",
            "categoryId":34,
            "productPrice":23,
            "discount":0.98,
            "publishStatus":1,
            "specifacation":null,
            "productionDate":"2022-06-06T12:47:57.000+00:00",
            "shelfLife":"2022-06-06T13:02:21.000+00:00",
            "userCreate":"admin",
            "gmtCreate":"2022-06-06T12:47:57.000+00:00",
            "isDeleted":0,
            "userModified":"admin",
            "gmtModified":"2022-06-06T12:47:57.000+00:00",
            "descript":"这是潍坊得萝卜，使用樱桃图片替代",
           "picUrl":"http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg"
        },
        {
            "productId":1001,
            "productTitle":"橘子",
            "categoryId":26,
            "productPrice":3,
            "discount":2.5,
            "publishStatus":1,
            "specifacation":"500克/斤",
            "productionDate":"2022-05-09T00:00:00.000+00:00",
            "shelfLife":"2022-05-09T00:00:00.000+00:00",
            "userCreate":"admin",
            "gmtCreate":"2022-05-24T08:12:10.000+00:00",
            "isDeleted":1,
            "userModified":"admin",
            "gmtModified":"2022-05-24T08:12:10.000+00:00",
            "descript":"好吃好看",
            "picUrl":"http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg"
        }
    ]
}

```

## 7.4 最新商品

```
请求:/productInfo/latestProduct
请求方式：post
参数： Integer currentPage, Integer pageSize  #当前页，页容量
返回值：json
```

```
{
    "flag":true,
    "code":10000,
    "message":"促销商品查询成功",
    "data":[
       
        {
            "productId":1016,
            "productTitle":"潍坊萝卜",
            "categoryId":34,
            "productPrice":23,
            "discount":0.98,
            "publishStatus":1,
            "specifacation":null,
            "productionDate":"2022-06-06T12:47:57.000+00:00",
            "shelfLife":"2022-06-06T13:02:21.000+00:00",
            "userCreate":"admin",
            "gmtCreate":"2022-06-06T12:47:57.000+00:00",
            "isDeleted":0,
            "userModified":"admin",
            "gmtModified":"2022-06-06T12:47:57.000+00:00",
            "descript":"这是潍坊得萝卜，使用樱桃图片替代",
           "picUrl":"http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg"
        },
        {
            "productId":1001,
            "productTitle":"橘子",
            "categoryId":26,
            "productPrice":3,
            "discount":2.5,
            "publishStatus":1,
            "specifacation":"500克/斤",
            "productionDate":"2022-05-09T00:00:00.000+00:00",
            "shelfLife":"2022-05-09T00:00:00.000+00:00",
            "userCreate":"admin",
            "gmtCreate":"2022-05-24T08:12:10.000+00:00",
            "isDeleted":1,
            "userModified":"admin",
            "gmtModified":"2022-05-24T08:12:10.000+00:00",
            "descript":"好吃好看",
            "picUrl":"http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg"
        }
    ]
}
```


