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
          请您在<span style="color: #009866">05时50分21秒</span
          >内完成支付,否则订单会被自动取消
        </div>
      </div>
      <div style="float: right; margin-top: -45px">
        <div>
          应付金额
          <span style="font-size: 18px; font-weight: 600; color: #009866"
            >29.90</span
          >
          元
        </div>
        <div>
          <el-button type="text">订单详情</el-button>
        </div>
      </div>
    </div>
    <div class="payTypes">
      <div style="margin-top: 40px">
        <div style="height: 50px">支付平台</div>
        <div></div>
      </div>
      <div class="line"></div>
      <div style="margin-top: 40px">
        <div>支付网银</div>
        <div style="height: 50px"></div>
      </div>
      <div class="line"></div>
      <div style="text-align: center;padding: 20px 0 45px 0;">
        <el-button
          style="
            color: #fff;
            width: 200px;
            background: #009866;
            font-size: 25px;
            letter-spacing: 4px;
          "
          plain
          @click="buys(item)"
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
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      ProductData: [1, 2, 3, 4, 5, 6],
    };
  },
  created() {
    console.log(this.$route.path);
  },
  mounted() {},
  methods: {
    onSelect(type) {
      this.curSelect = type;
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