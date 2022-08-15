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
    "orderItemList":[
        {
            "orderDetailId":null,
            "orderId":null,
            "productId":1002,
            "productCnt":10,
            "totalPrice":50,
            "feeMoney":null,
            "userCreate":null,
            "gmtCreate":null,
            "isDeleted":null,
            "userModified":null,
            "gmtModified":null,
            "productCode":null,
            "picUrl":"http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg",
            "productName":"烟台苹果",
            "productPrice":5,
            "discount":0.96,
            "descript":"不好吃，也不好看"
        },
        {
            "orderDetailId":null,
            "orderId":null,
            "productId":1001,
            "productCnt":40,
            "totalPrice":120,
            "feeMoney":null,
            "userCreate":null,
            "gmtCreate":null,
            "isDeleted":null,
            "userModified":null,
            "gmtModified":null,
            "productCode":null,
            "picUrl":"http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg",
            "productName":"烟台橘子",
            "productPrice":3,
            "discount":2.5,
            "descript":"好吃好看"
        }
    ],
    "totalNum":50,
    "totalPrice":170
}
```

## 3.3 商品数量变更【复用add方法即可】

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

## 3.1 点击结算按钮，跳转到订单结算页，收货地址查询和购物车信息查询展示在页面

```
请求:/order/ready/order 
请求方式：get
参数： Model model 注：无需前台传递，用来封装数据传递给前台
返回值：json
```

```
{
 
    "userAddrList":[
        {
            "userAddrId":1,
            "phone":"18811307278",
            "userName":"张久军",
            "userPhone":"18811307278",
            "provinceId":120000,
            "cityId":120100,
            "districtId":120115,
            "detail":"天津市市辖区宝坻区樱花园5号楼1单元502",
            "isDefault":0,
            "userCreate":"admin",
            "gmtCreate":"2022-06-15T15:56:39.000+00:00",
            "isDeleted":0,
            "userModified":"admin",
            "gmtModified":"2022-06-15T15:56:39.000+00:00"
        },
        {
            "userAddrId":2,
            "phone":"18811307278",
            "userName":"张久军",
            "userPhone":"18811307278",
            "provinceId":110000,
            "cityId":110100,
            "districtId":110107,
            "detail":"北京市市辖区石景山区香河园中里2号楼4单元101",
            "isDefault":1,
            "userCreate":"admin",
            "gmtCreate":"2022-06-15T16:17:03.000+00:00",
            "isDeleted":1,
            "userModified":"admin",
            "gmtModified":"2022-06-15T16:17:03.000+00:00"
        }
    ],
    "orderItemList":[
        {
            "orderDetailId":null,
            "orderId":null,
            "productId":1002,
            "productCnt":10,
            "totalPrice":50,
            "feeMoney":null,
            "userCreate":null,
            "gmtCreate":null,
            "isDeleted":null,
            "userModified":null,
            "gmtModified":null,
            "productCode":null,
            "picUrl":"http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg",
            "productName":"烟台苹果",
            "productPrice":5,
            "discount":0.96,
            "descript":"不好吃，也不好看"
        },
        {
            "orderDetailId":null,
            "orderId":null,
            "productId":1001,
            "productCnt":40,
            "totalPrice":120,
            "feeMoney":null,
            "userCreate":null,
            "gmtCreate":null,
            "isDeleted":null,
            "userModified":null,
            "gmtModified":null,
            "productCode":null,
            "picUrl":"http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg",
            "productName":"烟台橘子",
            "productPrice":3,
            "discount":2.5,
            "descript":"好吃好看"
        }
    ],
    "totalNum":50,
    "totalPrice":170
}


```

## 3.2 点击提交订单按钮， 下单

点击提交订单的时候，会立即创建订单数据，创建订单数据会将数据存入到2张表中，分别是订单主表和订单详情表，此处还需要修改商品对应的库存数量。



```
未支付     0
支付成功   1
超时已关闭  2
用户已取消  3
退款中     4
已退款     5
```



## 3.3 订单列表查询

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
参数： String orderId
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

#formStr是支付宝返回得一个js字符串脚本,需要执行 document.write(formStr)字符串，跳转到支付宝支付页面。

支付完成后，跳转到支付成功页面。
支付完成后，异步返回通知 
ngrok 内网穿透工具： 
（1）登录ngrok官网，使用的github账户，需要邮箱授权
（2）针对window下载ngrok
（3）配置授权： ngrok config add-authtoken 2A70Shuw82VwWWRjtOClUpikN82_7qYWs5UNzSLwiFSKetGMc
（4）ngrok http 18090 

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
请求:ali-pay/trade/refund/{orderId}/{reason}
请求方式：post
参数： String orderId,String reason
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
支付成功    1
超时已关闭  2
用户已取消  3
退款中      4
已退款      5
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

注意： 商品一级分类二级分类， 需要同步缓存。
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

## 7.5 搜索框关键字搜索

```
请求:/search
请求方式：post
参数： Map<String,String> paramMap  
#前端查询条件后端使用map集合封装，前台属性名称为： keywords
# currentPage 传递当前页
# pageSize 页容量
返回值：json

```

返回值： 

```
{
    "total": 3,
    "totalPages": 1,
    "rows": [
        {
            "productId": 1002,
            "productTitle": "烟台苹果",
            "categoryId": 24,
            "productPrice": 5.0,
            "discount": 0.96,
            "publishStatus": 1,
            "specifacation": "500g/斤",
            "productionDate": "2022-05-10T00:00:00.000+00:00",
            "shelfLife": "2022-05-09T00:00:00.000+00:00",
            "descript": null,
            "userCreate": "admin",
            "gmtCreate": "2022-05-24T08:12:10.000+00:00",
            "userModified": "admin",
            "gmtModified": "2022-05-24T08:12:10.000+00:00",
            "isDeleted": 1,
            "categoryName": "荔枝1",
            "picUrl": "http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg"
        },
        {
            "productId": 1007,
            "productTitle": "烟台石榴",
            "categoryId": 29,
            "productPrice": 30.0,
            "discount": 0.9,
            "publishStatus": 1,
            "specifacation": null,
            "productionDate": "2022-05-25T22:20:46.000+00:00",
            "shelfLife": "2022-05-25T22:35:10.000+00:00",
            "descript": null,
            "userCreate": "admin",
            "gmtCreate": "2022-06-13T17:31:45.000+00:00",
            "userModified": "admin",
            "gmtModified": "2022-06-13T17:31:45.000+00:00",
            "isDeleted": 1,
            "categoryName": "芒果",
            "picUrl": "http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg"
        },
        {
            "productId": 1014,
            "productTitle": "烟台鸭梨",
            "categoryId": 30,
            "productPrice": 100.0,
            "discount": 0.9,
            "publishStatus": 1,
            "specifacation": null,
            "productionDate": "2022-05-26T15:34:58.000+00:00",
            "shelfLife": "2022-05-26T15:49:22.000+00:00",
            "descript": null,
            "userCreate": "admin",
            "gmtCreate": "2022-05-24T08:08:59.000+00:00",
            "userModified": "admin",
            "gmtModified": "2022-05-24T08:08:59.000+00:00",
            "isDeleted": 1,
            "categoryName": "橘子",
            "picUrl": "http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg"
        }
    ]
}
```

## 7.6 根据商品二级分类查询分类商品列表展示

```
请求:/productInfo/findByCategoryName
请求方式：get
参数： Integer currentPage, Integer PageSize ,String categoryName
#currentPage 当前页
#PageSize    页容量
#categoryName 商品分类名称
返回值：json
```

返回值： 

```json
{
    "total":2,
    "rows":[
        {
            "productId":1001,
            "productTitle":"烟台橘子",
            "categoryId":26,
            "productPrice":3,
            "discount":2.5,
            "publishStatus":1,
            "specifacation":"500克/斤",
            "productionDate":"2022-05-09T00:00:00.000+00:00",
            "shelfLife":"2022-05-09T00:00:00.000+00:00",
            "userCreate":"admin",
            "gmtCreate":"2022-06-14T13:32:32.000+00:00",
            "isDeleted":1,
            "userModified":"admin",
            "gmtModified":"2022-06-14T13:32:32.000+00:00",
            "descript":null,
            "firstCategoryName":null,
            "secCategoryName":null,
            "picUrl":"http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg",
            "picUrls":null
        },
        {
            "productId":1015,
            "productTitle":"海虹",
            "categoryId":26,
            "productPrice":30,
            "discount":0.98,
            "publishStatus":1,
            "specifacation":null,
            "productionDate":"2022-05-31T12:09:31.000+00:00",
            "shelfLife":"2022-05-31T12:23:55.000+00:00",
            "userCreate":"admin",
            "gmtCreate":"2022-05-31T12:09:31.000+00:00",
            "isDeleted":0,
            "userModified":"admin",
            "gmtModified":"2022-05-31T12:09:31.000+00:00",
            "descript":null,
            "firstCategoryName":null,
            "secCategoryName":null,
            "picUrl":"http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg",
            "picUrls":null
        }
    ]
}

```



## 7.7 商品详情展示

```
请求:/productInfo/findById/{productId}
请求方式：get
参数： Long productId
返回值：json
```

返回值类型： 

```json
{
    "flag":true,
    "code":10000,
    "message":"查询成功",
    "data":{
        "productId":1015,
        "productTitle":"海虹",
        "categoryId":26,
        "productPrice":30,
        "discount":0.98,
        "publishStatus":1,
        "specifacation":null,
        "productionDate":"2022-05-31T12:09:31.000+00:00",
        "shelfLife":"2022-05-31T12:23:55.000+00:00",
        "userCreate":"admin",
        "gmtCreate":"2022-05-31T12:09:31.000+00:00",
        "isDeleted":0,
        "userModified":"admin",
        "gmtModified":"2022-05-31T12:09:31.000+00:00",
        "descript":"这是路地版本海虹",
        "firstCategoryName":null,
        "secCategoryName":"海虹",
        "picUrl":"http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg",
        "picUrls":[
            "http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg",
            "http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdhiKAeJHnAAAzsrywp40661.jpg",
            "http://192.168.50.50:8080/group1/M00/00/00/wKgyMmKdcL2Ad5ryAADV4jcc7Ck640.jpg"
        ]
    }
}
```

模块总结前台：

用户模块：登录，注册，退出， 显示用户名称

商品分类： 一级分类查询，一级分类下得二级分类查询， 

商品模块： 热门商品 促销商品  二级分类下得所有商品 商品详情  

搜索模块： 关键字搜索 分页展示  高亮显示

购物车模块：

订单模块：

支付模块： 

广告模块： 首页广告模块展示





购物车内容： 



添加到购物车： 

http://localhost:10012/cart/add?productId=1002&num=10

查询购物车： 

http://localhost:10012/cart/list

下单： 

http://localhost:10012/order?userAddr=北京樱花园

支付： 

http://localhost:18090/ali-pay/trade/page/pay/1026

vscode：页面展示

