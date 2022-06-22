<template>
  <div>
    <Header></Header>
    <div class="pesponCenter">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <div style="width: 700px; margin-left: 430px">
        <el-steps :space="250" :active="2" finish-status="success">
          <el-step title="1、我的购物车"></el-step>
          <el-step title="2、填写核对订单信息"></el-step>
          <el-step title="3、成功提交订单"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="settlementInfo" style="margin-bottom: 20px">
      <div>填写并核对订单信息</div>
      <div
        style="
          border: 2px solid #009866;
          height: 700px;
          padding: 20px;
          margin-top: 10px;
        "
      >
        <div style="font-size: 16px; font-weight: 500; margin-bottom: 10px">
          收货人信息
        </div>
        <div style="float: right;margin-top: -40px;">
          <el-button type="text"><i class="el-icon-plus"></i>新增收货地址</el-button>
        </div>
        <div>
          <div
            v-for="(item, index) in addressList"
            :key="index"
            style="display: flex"
          >
            <div
              style="
                width: 120px;
                height: 35px;
                text-align: center;
                line-height: 35px;
                border: 1px solid #009866;
                margin-bottom: 20px;
              "
            >
              {{ item.name }}
            </div>
            <div style="height: 35px; line-height: 35px; margin-left: 20px">
              {{ item.name }}
            </div>
            <div style="height: 35px; line-height: 35px; margin-left: 20px">
              {{ item.cities }}
            </div>
            <div style="height: 35px; line-height: 35px; margin-left: 20px">
              {{ item.detail }}
            </div>
            <div style="height: 35px; line-height: 35px; margin-left: 20px">
              {{ item.phone }}
            </div>
            <div
              style="
                height: 35px;
                line-height: 35px;
                background: #039766;
                color: #fff;
                border-radius: 4px;
                font-size: 14px;
                padding: 0 5px;
                margin-left: 100px;
              "
              v-if="item.default === true"
            >
              默认地址
            </div>
            <div
              style="height: 35px; line-height: 35px;margin-left: 100px;"
              v-if="item.default === false"
            >
              <el-button type="text">设置为默认地址</el-button>
            </div>
            <div style="height: 35px; line-height: 35px;margin-left: 20px;">
              <i style="cursor: pointer;" class="el-icon-edit"></i>
            </div>
            <div
              style="height: 35px; line-height: 35px;margin-left: 20px;"
              v-if="item.default !== true"
            >
              <i style="cursor: pointer;" class="el-icon-delete"></i>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
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
      addressList: [
        {
          name: "周桂林",
          cities: "北京市 朝阳区",
          detail: "小关安苑北里安苑北里小区 19号楼 1708",
          phone: "13716883072",
          default: true,
        },
        {
          name: "周大林",
          cities: "北京市 朝阳区",
          detail: "小关安苑北里安苑北里小区 19号楼 1708",
          phone: "13716883072",
          default: false,
        },
        {
          name: "周小林",
          cities: "北京市 朝阳区",
          detail: "小关安苑北里安苑北里小区 19号楼 1708",
          phone: "13716883072",
          default: false,
        },
      ],
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
.settlementInfo {
  width: 1200px;
  margin: auto;
}
.el-step__title.is-success {
  color: #67c23a;
  font-size: 15px;
  font-weight: 500;
}
.el-step__title.is-process {
  font-weight: 500;
  color: #8c8f94;
  font-size: 15px;
}
.is-process .el-step__icon.is-text {
  color: #8c8f94;
  border-color: #8c8f94;
}
.line {
  border-bottom: 1px solid #009866;
  margin-bottom: 20px;
}
</style>