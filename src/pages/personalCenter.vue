<template>
  <div>
    <Header></Header>
    <div class="pesponCenter">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="type">会员中心</div>
    </div>
    <div class="line"></div>
    <div class="pesponType">
      <div class="menu_left">
        <div class="one"><i class="el-icon-s-custom"></i>会员中心</div>
        <div
          @click="onSelect(1)"
          :class="`two ${curSelect === 1 ? 'curSelect' : ''}`"
        >
          <i class="el-icon-document-remove"></i>订单详情
        </div>
        <div
          @click="onSelect(2)"
          :class="`two ${curSelect === 2 ? 'curSelect' : ''}`"
        >
          <i class="el-icon-user"></i>用户基本信息
        </div>
        <div
          @click="onSelect(3)"
          :class="`two ${curSelect === 3 ? 'curSelect' : ''}`"
        >
          <i class="el-icon-unlock"></i>修改密码
        </div>
      </div>
      <div class="menu_right">
        <!-- 订单详情 -->
        <div v-if="curSelect === 1">
          <div
            v-for="(item, index) in orderData"
            :key="index"
            class="orderInfo"
            style="padding: 10px"
          >
            <div style="background: #eceaea; height: 45px; line-height: 45px">
              <div style="float: right; margin-top: 3px; margin-right: 28px">
                <div
                  class="afterSales"
                  style="float: left; margin-right: 34px; cursor: pointer"
                >
                  申请售后
                </div>
                <i
                  style="font-weight: 600; font-size: 21px"
                  class="el-icon-delete"
                ></i>
              </div>
              <div style="display: flex">
                <div
                  style="
                    font-size: 15px;
                    font-weight: 600;
                    margin-left: 20px;
                    margin-right: 30px;
                  "
                >
                  2022-03-01
                </div>
                <div>订单号:1232624382738231862</div>
              </div>
            </div>
            <div style="display: flex; padding: 10px; width: 100%">
              <div style="display: flex">
                <div>
                  <img style="width: 126px" src="../assets/cart-1.jpg" />
                </div>
                <div style="width: 321px">
                  <div>
                    芭芭农场兑换品广西武鸣沃柑3斤装新鲜水果整箱砂糖蜜桔柑橘桔子【交易快照】
                  </div>
                  <div style="padding-bottom: 10px; padding-top: 10px">
                    净含量:3斤 规格:[中大果]果径65-70mm,超值热卖!
                  </div>
                  <div>
                    <img
                      style="width: 30px; height: 30px"
                      src="../assets/orderOne.png"
                    />
                    <img
                      style="width: 30px; height: 30px"
                      src="../assets/orderThree.png"
                    />
                  </div>
                </div>
              </div>
              <div style="line-height: 141px; width: 100px; text-align: center">
                ¥ 12
              </div>
              <div style="line-height: 141px; width: 100px; text-align: center">
                1
              </div>
              <div style="text-align: center; width: 120px">
                <div>¥ 0.01</div>
                <div>(含运费: 0.01)</div>
                <div>手机订单</div>
              </div>
              <div style="text-align: center; width: 220px">
                <div>交易成功</div>
                <div>订单详情</div>
                <div>查看物流</div>
                <div>双方已评</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 用户基本信息 -->
        <div v-if="curSelect === 2">
          <div class="formList" style="padding: 30px;">
            <el-form
              :model="userInfoForm"
              :rules="userInfoRules"
              ref="userInfoForm"
              label-width="100px"
            >
              <el-form-item label="手机号码" prop="phoneNumber">
                <el-input
                  style="width: 250px"
                  v-model="userInfoForm.phoneNumber"
                  placeholder="请输入手机号码"
                ></el-input>
              </el-form-item>

              <el-form-item label="用户昵称" prop="nickName">
                <el-input
                  style="width: 250px"
                  v-model="userInfoForm.nickName"
                  placeholder="请输入用户昵称"
                >
                </el-input>
              </el-form-item>

              <el-form-item label="真实姓名" prop="userName">
                <el-input
                  style="width: 250px"
                  v-model="userInfoForm.nickName"
                  placeholder="请输入真实姓名"
                >
                </el-input>
              </el-form-item>

              <el-form-item label="证件类型" prop="certificates">
                <el-radio-group v-model="userInfoForm.certificates">
                  <el-radio label="身份证"></el-radio>
                  <el-radio label="军官证"></el-radio>
                  <el-radio label="护照"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="邮箱" prop="email">
                <el-input
                  style="width: 250px"
                  v-model="userInfoForm.email"
                  placeholder="请输入邮箱"
                >
                </el-input>
              </el-form-item>

              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="userInfoForm.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="用户积分">
                <el-input
                  style="width: 250px"
                  v-model="userInfoForm.integral"
                  disabled
                >
                </el-input>
              </el-form-item>

              <el-form-item label="注册时间">
                <el-date-picker
                 style="width: 250px"
                  v-model="userInfoForm.registrationTime"
                  type="date"
                  disabled
                >
                </el-date-picker>
              </el-form-item>

              <el-form-item label="会员生日">
                <el-date-picker
                 style="width: 250px"
                  v-model="userInfoForm.birthday"
                  type="date"
                  placeholder="会员生日"
                >
                </el-date-picker>
              </el-form-item>

              <el-form-item label="会员等级" prop="level">
                <el-radio-group v-model="userInfoForm.level">
                  <el-radio label="普通会员"></el-radio>
                  <el-radio label="青铜"></el-radio>
                  <el-radio label="白银"></el-radio>
                  <el-radio label="黄金"></el-radio>
                  <el-radio label="钻石"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item>
                <el-button
                  style="margin-left: 70px; background: #408e5c; width: 80px"
                  type="primary"
                  id="registerSub"
                  @click="submitFormUserInfo('userInfoForm')"
                  >确定</el-button
                >
                <el-button
                  style="margin-left: 70px; background: #408e5c; width: 80px"
                  type="primary"
                  id="registerSub"
                  >取消</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!-- 修改密码 -->
        <div v-if="curSelect == 3" class="passwordForm" id="passwordPage">
          <div class="formList" style="padding: 30px;">
            <el-form
              :model="passwordForm"
              :rules="passwordRules"
              ref="passwordForm"
              label-width="100px"
            >
              <el-form-item label="旧密码" prop="password">
                <el-input
                  style="width: 250px"
                  v-model="passwordForm.password"
                  placeholder="请输入旧密码"
                ></el-input>
              </el-form-item>

              <el-form-item label="新密码" prop="newPassword">
                <el-input
                  style="width: 250px"
                  v-model="passwordForm.newPassword"
                  placeholder="请输入新密码"
                  show-password
                >
                </el-input>
              </el-form-item>

              <el-form-item label="确认密码" prop="confirmPassword">
                <el-input
                  style="width: 250px"
                  v-model="passwordForm.confirmPassword"
                  placeholder="请输入确认密码"
                  show-password
                >
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  style="margin-left: 70px; background: #408e5c; width: 80px"
                  type="primary"
                  id="registerSub"
                  @click="submitFormPassword('passwordForm')"
                  >保存</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
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
      curSelect: 2, // 1 订单险情 2 用户基本信息 3 修改密码
      orderData: [1, 2, 3, 4],
      userInfoForm: {
        password: "",
        newPassword: "",
        confirmPassword: "",
      },
      userInfoRules: {
        password: [
          { required: true, validator: validatorPhone, trigger: "blur" },
        ],
        newPassword: [
          { required: true, message: "请输入手机验证码", trigger: "blur" },
        ],
        confirmPassword: [
          { required: true, message: "请勾选", trigger: "blur" },
        ],
      },
      // 修改密码表单
      passwordForm: {
        password: "",
        newPassword: "",
        confirmPassword: "",
      },
      passwordRules: {
        password: [
          { required: true, validator: validatorPhone, trigger: "blur" },
        ],
        newPassword: [
          { required: true, message: "请输入手机验证码", trigger: "blur" },
        ],
        confirmPassword: [
          { required: true, message: "请勾选", trigger: "blur" },
        ],
      },
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
    // 修改密码
    submitFormPassword(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$store.state.post("userInfo/login",{ // vuex
          // this.$http
          //   .post("userInfo/login", {
          //     phone: this.ruleForm.phone,
          //     code: this.ruleForm.code,
          //     password: this.ruleForm.password,
          //   })
          //   .then((response) => {
          //     if (response.code === 2000) {
          //       this.$message({
          //         message: response.message,
          //         type: "success",
          //       });
          //       this.$router.push("/");
          //     } else {
          //       this.$message.error(response.message);
          //     }
          //   });
        } else {
          return false;
        }
      });
    },
    // 基本信息修改
    submitFormUserInfo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$store.state.post("userInfo/login",{ // vuex
          // this.$http
          //   .post("userInfo/login", {
          //     phone: this.ruleForm.phone,
          //     code: this.ruleForm.code,
          //     password: this.ruleForm.password,
          //   })
          //   .then((response) => {
          //     if (response.code === 2000) {
          //       this.$message({
          //         message: response.message,
          //         type: "success",
          //       });
          //       this.$router.push("/");
          //     } else {
          //       this.$message.error(response.message);
          //     }
          //   });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.pesponCenter {
  padding: 20px 0px;
  width: 1200px;
  margin: auto;
  display: flex;
}
.pesponCenter .logo img {
  width: 200px;
}
.pesponCenter .type {
  color: #228664;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
  margin-top: 34px;
}
.line {
  width: 1200px;
  margin: auto;
  border-bottom: 2px solid #009866;
  margin-bottom: 20px;
}
.pesponType {
  width: 1200px;
  margin: auto;
  display: flex;
  margin-bottom: 20px;
}
.pesponType .menu_left {
  width: 18%;
}
.pesponType .menu_left div {
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #e6e1e1;
  border-right: none;
  color: #867d7d;
  height: 50px;
  line-height: 50px;
}
.pesponType .menu_left div i {
  margin-left: 30px;
  margin-right: 8px;
}
.pesponType .menu_left div.one {
  color: #fff;
  background: #60b17d;
  margin-bottom: 7px;
}
.pesponType .menu_left div.two {
  cursor: pointer;
}
.pesponType .menu_left div.two:hover {
  color: #408e5c;
  border: 1px solid #60b17d;
  border-radius: 5px;
}
.pesponType .menu_left div.curSelect {
  color: #408e5c;
  border: 1px solid #60b17d;
  border-radius: 5px;
}
.pesponType .menu_right {
  border: 1px solid #e6e1e1;
  width: 82%;
}
.menu_right .orderInfo i:hover {
  color: red;
  cursor: pointer;
}
.menu_right .orderInfo .afterSales:hover {
  color: #009866;
}
</style>