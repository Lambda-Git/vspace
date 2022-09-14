<template>
  <div>
    <Header></Header>
    <div class="pesponCenter">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
    </div>
    <!-- <div class="line"></div> -->
    <div class="payInfo">
      <div>
        <div style="font-size: 16px; font-weight: 500">
          订单提交成功，请尽快付款!订单号:434342832323232
        </div>
        <!-- <div style="font-size: 14px">
          请您在<span style="color: #009866">05时50分21秒</span
          >内完成支付,否则订单会被自动取消
        </div> -->
      </div>
      <div style="float: right; margin-top: -45px">
        <div>
          应付金额
          <span style="font-size: 18px; font-weight: 600; color: #009866">{{
            payable
          }}</span>
          元
        </div>
        <div>
          <router-link :to="{ path: '/personalCenter', query: { type: 1 } }">
            <el-button type="text">订单列表</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="divform"></div>
    <div class="payTypes">
      <div style="margin-top: 40px">
        <div style="height: 50px">支付平台</div>
        <div>
          <img
            style="width: 130px; margin-bottom: 20px"
            src="../assets/payType.png"
          />
        </div>
      </div>
      <div class="line"></div>
      <div style="text-align: center; padding: 20px 0 45px 0">
        <el-button
          style="
            color: #fff;
            width: 200px;
            background: #009866;
            font-size: 25px;
            letter-spacing: 4px;
          "
          plain
          @click="payNow()"
          >立即支付</el-button
        >
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "payGateWay",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      payable: 0,
      ProductData: [1, 2, 3, 4, 5, 6],
      text: `<form name="punchout_form" method="post" action="https://openapi.alipaydev.com/gateway.do?charset=UTF-8&method=alipay.trade.page.pay&sign=VwuAyQZ15oFqBm3cfDB%2BBazqe4RAki9kJW%2FW7JpK0AIjkQ%2FTyUyCDfecCufXe%2BdqaFMtnm8qMh9fZN0d0o4B8O7KMysnKNa7DbQ8kph2VBVIL83FN0cJ5KL0UMnLehmPo3aqZ8SPW8u8tLiR3ZNfgzB%2F7kKItD9w29bs0AWEUfRH1DjWsmPuZITkBnoCTB%2B3YxW7JpvBvLAZqEZJ62p13EVbrz9bLYvQZUxnGFZaZ9yX6bst1nT6EI3xkb0d76DCT6%2Fmry4ewTYZ9eGY2y8wBVOYCSjVfy%2FYkAI4XUm%2FnCxYDpWbGXqYowEz6PgRLzz5D%2FI29O%2Fe5VyyUF60dBloYg%3D%3D&return_url=http%3A%2F%2Flocalhost%3A8080%2F%23%2Fsuccess&notify_url=https%3A%2F%2F0743-2409-8900-1801-16aa-68cb-6b88-b25e-92fc.ap.ngrok.io%2Fali-pay%2Ftrade%2Fnotify&version=1.0&app_id=2021000119624133&sign_type=RSA2&timestamp=2022-09-07+19%3A42%3A51&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json">
<input type="hidden" name="biz_content" value="{&quot;out_trade_no&quot;:1055,&quot;total_amount&quot;:550,&quot;subject&quot;:550.0,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}">
<input type="submit" value="立即支付" style="display:none" >
</form>
<script>document.forms[0].submit();`,
    };
  },
  created() {
    console.log(this.$route.path);
    this.payable = this.$route.query.payable;
  },
  mounted() {},
  methods: {
    onSelect(type) {
      this.curSelect = type;
    },
    payNow() {
      let divForm = document.getElementsByTagName("divform");
      if (divForm.length) {
        document.body.removeChild(divForm[0]);
      }
      const div = document.createElement("divform");
      div.innerHTML = this.text; // res.data就是sb支付宝返回给你的form
      document.body.appendChild(div);
      // document.forms[0].setAttribute('target', '_blank') // 加了_blank可能出问题所以我注释了
      document.forms[0].submit();
    },
  },
};
</script>
<style>
.pesponCenter {
  padding: 20px 0px;
  width: 1200px;
  margin: auto;
  display: flex;
}
.pesponCenter .logo img {
  width: 200px;
}
.line {
  width: 1200px;
  margin: auto;
  border-bottom: 1px solid #009866;
  margin-bottom: 20px;
}
.payInfo {
  width: 1200px;
  margin: auto;
  padding: 20px 70px 30px 70px;
}
.payTypes {
  width: 1200px;
  margin: auto;
}
</style>