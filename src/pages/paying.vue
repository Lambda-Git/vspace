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
        <div style="font-size: 14px">
          请您在<span id="timing" style="color: #009866; font-size: 20px"></span
          >内完成支付,否则订单会被自动取消
        </div>
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
        <div
          style="display: flex; flex-wrap: wrap; justify-content: space-around"
        >
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
              padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_1.jpeg"
          />
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
              padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_2.jpeg"
          />
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
             padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_3.jpeg"
          />
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
             padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_4.jpeg"
          />
        </div>
        <div
          style="display: flex; flex-wrap: wrap; justify-content: space-around"
        >
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
              padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_5.jpeg"
          />
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
              padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_6.jpeg"
          />
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
             padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_7.jpeg"
          />
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
             padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_8.jpeg"
          />
        </div>
        <div
          style="display: flex; flex-wrap: wrap; justify-content: space-around"
        >
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
              padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_9.jpeg"
          />
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
              padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_10.jpeg"
          />
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
             padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_11.jpeg"
          />
          <img
            style="
              width: 130px;
              margin-bottom: 20px;
             padding: 12px 45px
              width: 130px;
              height: 26px;
              border: 1px solid #619b76;
              border-radius: 6px;
            "
            src="../assets/pay_12.jpeg"
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
      update_time: +new Date(),
      m: "",
      s: "",
    };
  },
  created() {
    console.log(this.$route.path);
    this.payable = this.$route.query.payable;
    this.resetTime(1800);
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
    //倒计时start     需要传入的参数为秒数，此方法倒计时结束后会自动刷新页面
    // resetTime(1800);
    resetTime(timeStamp) {
      var timer = null;
      var t = timeStamp;
      var m = 0;
      var s = 0;
      m = Math.floor((t / 60) % 60);
      m < 10 && (m = "0" + m);
      s = Math.floor(t % 60);
      //开启定时任务
      timer = setInterval(countDown, 1000);
      function countDown() {
        s--;
        s < 10 && (s = "0" + s);
        if (s.length >= 3) {
          s = 59;
          m = Number(m) - 1;
          m < 10 && (m = "0" + m);
        }
        if (m.length >= 3) {
          m = "00";
          s = "00";
          //倒计时结束,关闭定时任务。
          clearInterval(timer);
        }
        document.getElementById("timing").innerHTML = m + "分" + s + "秒";
        // $("#Pk10Time").html(m + "分" + s + "秒");
        if (m == 0 && s == 0) {
          //倒计时结束 取消订单
          this.$http
            .post("/ali-pay/trade/close", {
              orderSign: '订单号ID',
            })
            .then((response) => {
              if (response.code === 2000) {
                this.$message({
                  message: response.message,
                  type: "success",
                });
                this.$router.push("/personalCenter?type=1");
              } else {
                this.$message.error(response.message);
              }
            });
          // 模拟成功
          this.$message({
            message: "取消订单成功!",
            type: "success",
          });
        }
      }
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