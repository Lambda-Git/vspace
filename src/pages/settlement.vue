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
      <div style="border: 2px solid #009866; padding: 20px; margin-top: 10px">
        <div style="font-size: 16px; font-weight: 500; margin-bottom: 10px">
          收货人信息
        </div>
        <div style="float: right; margin-top: -40px">
          <el-button type="text" @click="add"
            ><i class="el-icon-plus"></i>新增收货地址</el-button
          >
        </div>
        <div>
          <div
            v-for="(item, index) in addressList"
            :key="index"
            style="display: flex"
          >
            <div
              :class="addresSelect === item.userAddrId ? 'addresSelect' : ''"
              class="addressName"
              @click="addresOnSelect(item.userAddrId)"
            >
              {{ item.userName }}
            </div>
            <div style="height: 35px; line-height: 35px; margin-left: 20px">
              {{ item.userName }}
            </div>
            <div style="height: 35px; line-height: 35px; margin-left: 20px">
              {{ item.provinceName }}
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
              v-if="item.isDefault === 0"
            >
              默认地址
            </div>
            <div
              style="height: 35px; line-height: 35px; margin-left: 100px"
              v-if="item.isDefault === 1"
            >
              <el-button @click="setDefault(item)" type="text"
                >设置为默认地址</el-button
              >
            </div>
            <div style="height: 35px; line-height: 35px; margin-left: 20px">
              <i
                style="cursor: pointer"
                class="el-icon-edit"
                @click="editAdress(item)"
              ></i>
            </div>
            <div
              style="height: 35px; line-height: 35px; margin-left: 20px"
              v-if="item.isDefault === 1"
            >
              <i
                style="cursor: pointer"
                class="el-icon-delete"
                @click="delAdress(item)"
              ></i>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div style="margin-bottom: 30px">
          <div style="font-size: 16px; font-weight: 500; margin-bottom: 10px">
            支付方式
          </div>
          <div style="display: flex">
            <div class="paytype"><i class="el-icon-s-shop"></i>货到付款</div>
            <div
              @click="payTypeOnSelect(2)"
              :class="payType === 2 ? 'paySelect' : ''"
              class="paytype"
            >
              <i class="el-icon-full-screen"></i>在线支付
            </div>
            <div class="paytype"><i class="el-icon-bank-card"></i>对公转账</div>
          </div>
        </div>
        <div class="line"></div>
        <div style="margin-bottom: 30px">
          <div style="font-size: 16px; font-weight: 500; margin-bottom: 10px">
            送货清单
          </div>
          <div
            style="
              border: 1px solid #f7f5f5;
              background: #f7f5f5;
              border-radius: 5px;
            "
          >
            <div style="display: flex; padding: 30px">
              <div>
                <div
                  v-for="(item, index) in orderItemList"
                  :key="index"
                  style="display: flex"
                >
                  <div>
                    <img
                      style="
                        width: 100px;
                        height: 100px;
                        margin-right: 10px;
                        border-radius: 50px;
                      "
                      src="../assets/cart-1.jpg"
                    />
                  </div>
                  <div style="margin-right: 30px; line-height: 25px">
                    <div
                      style="
                        width: 500px;
                        font-size: 13px;
                        color: #898996;
                        margin-bottom: 5px;
                      "
                    >
                      {{ item.productName }}
                    </div>
                    <div
                      style="
                        width: 300px;
                        font-size: 13px;
                        color: #898996;
                        margin-bottom: 5px;
                      "
                    >
                      {{ item.descript }}
                    </div>
                    <div style="display: flex">
                      <div><img src="" /></div>
                      <div
                        style="width: 300px; font-size: 13px; color: #898996"
                      >
                        不支持7天无理由退货
                      </div>
                    </div>
                  </div>
                  <div style="width: 100px; text-align: center">
                    <div
                      style="
                        margin-top: 30px;
                        font-size: 16px;
                        font-weight: 600;
                        color: #009866;
                      "
                    >
                      ¥ {{ (item.totalPrice * item.discount).toFixed(2) }}
                    </div>
                    <div style="font-size: 14px; margin-top: 8px">不计重量</div>
                  </div>
                  <div
                    style="
                      width: 100px;
                      text-align: center;
                      margin-top: 40px;
                      font-size: 14px;
                    "
                  >
                    x {{ item.productCnt }}
                  </div>
                  <div
                    style="
                      width: 50px;
                      text-align: center;
                      margin-top: 40px;
                      font-size: 14px;
                    "
                  >
                    有货
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div style="margin-bottom: 30px">
          <div style="font-size: 16px; font-weight: 500; margin-bottom: 10px">
            发票信息
          </div>
          <div style="display: flex; font-size: 14px">
            <div style="margin-left: 20px">电子普通发票</div>
            <div style="margin-left: 30px">个人</div>
            <div style="margin-left: 30px">商品明细</div>
          </div>
        </div>
      </div>
    </div>
    <div class="buyInfo">
      <div>
        <div style="display: flex; margin-bottom: 10px">
          <div
            style="
              font-size: 14px;
              font-weight: 600;
              margin-left: 950px;
              width: 80px;
              text-align: right;
              margin-right: 70px;
            "
          >
            总商品金额:
          </div>
          <div style="font-size: 14px; font-weight: 600">
            ¥{{ this.totalPrice }}
          </div>
        </div>
        <div style="display: flex; margin-bottom: 10px">
          <div
            style="
              font-size: 14px;
              font-weight: 600;
              margin-left: 950px;
              width: 80px;
              text-align: right;
              margin-right: 70px;
            "
          >
            运费:
          </div>
          <div style="font-size: 14px; font-weight: 600">
            ¥{{ this.freight }}
          </div>
        </div>
      </div>
      <div
        style="
          border: 1px solid #f7f5f5;
          background: #f7f5f5;
          border-radius: 5px;
          padding: 20px 0;
          margin-bottom: 30px;
        "
      >
        <div style="display: flex; margin-bottom: 10px">
          <div
            style="
              font-size: 14px;
              font-weight: 600;
              margin-left: 950px;
              width: 80px;
              text-align: right;
              margin-right: 30px;
            "
          >
            应付总额:
          </div>
          <div style="font-size: 18px; font-weight: 600; color: #009866">
            ¥{{ this.totalPrice + this.freight }}
          </div>
        </div>
        <div style="display: flex; justify-content: flex-end">
          <div style="display: flex; margin-right: 40px">
            <div style="font-size: 14px; font-weight: 600; margin-right: 10px">
              寄送至:
            </div>
            <div style="font-size: 14px; font-weight: 600">
              {{
                this.curSelectUserInfo.provinceName === undefined
                  ? ""
                  : this.curSelectUserInfo.provinceName +
                    "   " +
                    this.curSelectUserInfo.detail
              }}
            </div>
          </div>
          <div style="display: flex; margin-right: 50px">
            <div style="font-size: 14px; font-weight: 600">收货人:</div>
            <div style="font-size: 14px; font-weight: 600">
              {{ this.curSelectUserInfo.userName }}
              {{ this.curSelectUserInfo.phone }}
            </div>
          </div>
        </div>
      </div>
      <div style="text-align: right; margin-bottom: 20px">
        <el-button
          style="background: #009866; color: #fff; width: 140px"
          plain
          @click="goPaying()"
          >提交订单</el-button
        >
      </div>
    </div>
    <el-dialog
      title="新增收货人信息"
      :visible.sync="dialogVisible"
      width="650px"
      :before-close="handleClose"
    >
      <div style="padding: 0 30px">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="所在区域" prop="cities">
            <el-cascader
              size="large"
              :options="options"
              v-model="ruleForm.cities"
              @change="handleChange"
            >
            </el-cascader>
          </el-form-item>
          <el-form-item label="收货人" prop="userName">
            <el-input v-model="ruleForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" prop="detail">
            <el-input v-model="ruleForm.detail"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { provinceAndCityData } from "element-china-area-data";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    let validatorPhone = function (phone, value, callback) {
      let reg =
        /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
      if (value === "") {
        callback(new Error("手机号不能为空"));
      } else if (!reg.test(value)) {
        callback(new Error("手机号格式错误"));
      } else {
        callback();
      }
    };
    return {
      addresSelect: -1,
      payType: 2,
      options: provinceAndCityData,
      orderItemList: [],
      dialogVisible: false,
      totalPrice: 0,
      freight: 6, // 运费
      mailingAddress: "", // 邮寄地址
      ruleForm: {
        id: 0,
        userName: "",
        cities: "",
        detail: "",
        phone: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入收货人姓名", trigger: "blur" },
        ],
        cities: [
          { required: true, message: "请选择所在省市“", trigger: "blur" },
        ],
        detail: [
          { required: true, message: "请输入详细地址", trigger: "blur" },
        ],
        phone: [{ required: true, validator: validatorPhone, trigger: "blur" }],
      },
      addressList: [],
      curSelectUserInfo: {},
    };
  },
  created() {
    console.log(this.$route.path);
    console.log("this.$store.state[settlementList]");
    console.log(this.$store.state["settlementList"]);
    // 获取当前用户收获地址
    this.getUserAddr();
    // 购物车信息查询和收货地址查询
    this.getAddresAndOrderList();
  },
  mounted() {},
  methods: {
    getUserAddr() {
      // /userAddr/list get
      this.$http
        .get("/static/userAddr.json", {
          phone: JSON.parse(localStorage.getItem("userInfo")).phone,
        })
        .then(
          (res) => {
            // 获取当前 默认地址 list
            res.data.data.forEach((item) => {
              if (item.isDefault === 0) {
                this.curSelectUserInfo = item;
              }
            });
            this.addressList = res.data.data;
          },
          (err) => {
            // 500响应
            console.log(err);
          }
        );
    },
    getAddresAndOrderList() {
      // /order/ready/order get
      this.$http.get("/static/addresAndOrderList.json").then(
        (res) => {
          // res.data.userAddrList.forEach((item) => {
          //   item.default = false;
          // });
          // this.addressList = res.data.userAddrList;
          this.totalPrice = res.data.totalPrice;
          this.orderItemList = res.data.orderItemList;
        },
        (err) => {
          // 500响应
          console.log(err);
        }
      );
    },
    onSelect(type) {
      this.curSelect = type;
    },
    // 新增用户地址信息
    add() {
      this.dialogVisible = true;
      this.ruleForm.id = undefined;
      this.ruleForm.userName = "";
      this.ruleForm.cities = [];
      this.ruleForm.detail = "";
      this.ruleForm.phone = "";
      this.dialogVisible = true;
    },
    editAdress(item) {
      console.log(item);
      this.dialogVisible = true;
      this.ruleForm.id = item.userAddrId;
      this.ruleForm.userName = item.userName;
      this.ruleForm.cities = [item.provinceId, item.cityId];
      this.ruleForm.detail = item.detail;
      this.ruleForm.phone = item.phone;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    saveAdress() {
      // /userAddr/addUserAddr?cities=120000,120100
      this.$http
        .get("/static/saveAdress.json", {
          cities: [this.ruleForm.cities[0], this.ruleForm.cities[1]],
          UserAddr: {
            serAddrId: this.ruleForm.id === 0 ? undefind : this.ruleForm.id,
            userName: this.ruleForm.userName,
            detail: this.ruleForm.detail,
            phone: this.ruleForm.phone,
          },
        })
        .then(
          (res) => {
            this.$message({
              message: res.data.message,
              type: "success",
            });
            this.dialogVisible = false;
          },
          (err) => {
            // 500响应
            console.log(err);
          }
        );
    },
    delAdress(item) {
      // /userAddr/deleteUserAddrByPhone?userPhone=18811307299    String userPhone
      this.$http
        .get("/static/deleteUserAddrByPhone.json", {
          userPhone: item.userPhone,
        })
        .then(
          (res) => {
            console.log(res);
            this.$message({
              message: res.data.message,
              type: "success",
            });
            this.getUserAddr();
          },
          (err) => {
            // 500响应
            console.log(err);
          }
        );
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.saveAdress();
        } else {
          return false;
        }
      });
    },
    handleChange(value) {
      console.log(value);
    },
    setDefault(item) {
      // /userAddr/updateUserAddrDefault get   String phone ,String userPhone
      this.$http
        .get("/static/setDefault.json", {
          phone: JSON.parse(localStorage.getItem("userInfo")).phone,
          userPhone: item.userPhone,
        })
        .then(
          (res) => {
            console.log(res);
            this.$message({
              message: res.data.message,
              type: "success",
            });
            this.getUserAddr();
          },
          (err) => {
            // 500响应
            console.log(err);
          }
        );
      // 寄送地址 同步更新
      this.addressList.forEach((list) => {
        if (list.userAddrId === item.userAddrId) {
          this.curSelectUserInfo = list;
        }
      });
    },
    addresOnSelect(userAddrId) {
      this.addresSelect = userAddrId;
      this.addressList.forEach((list) => {
        if (list.userAddrId === userAddrId) {
          this.curSelectUserInfo = list;
        }
      });
    },
    payTypeOnSelect(num) {
      this.payType = num;
    },
    // 下单
    goPaying() {
      // /ali-pay/trade/page/pay  post
      this.$http.get("/static/tradePay.json").then(
        (res) => {
          this.$router.push({
            path: "/paying",
            query: {
              payable: this.totalPrice + this.freight,
              orderNumber: res.data.orderId,
              formStr: res.data.formStr,
            },
          });
        },
        (err) => {
          // 500响应
          console.log(err);
        }
      );
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
.addressName {
  width: 120px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border: 1px solid #d4cece;
  margin-bottom: 20px;
  cursor: pointer;
}
.addressName:hover {
  color: #009866;
}
.paytype {
  border: 1px solid #d4cece;
  padding: 5px 20px;
  margin-right: 50px;
  cursor: pointer;
  color: #bcb4b4;
}
.paytype:hover {
  color: #009866;
}
.addresSelect {
  border: 1px solid #009866;
  color: #009866;
}
.paySelect {
  border: 1px solid #009866;
  color: #009866;
}
.buyInfo {
  width: 1200px;
  margin: auto;
  margin-top: 40px;
}
</style>