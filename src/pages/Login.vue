<template>
  <div>
    <LoginHeader></LoginHeader>
    <div class="loginForm" id="loginPage">
      <div class="formList">
        <div
          :class="loginType === 2 ? 'cur' : ''"
          class="title typeOne"
          @click="onSelect(2)"
        >
          验证码登录
        </div>
        <div
          :class="loginType === 1 ? 'cur' : ''"
          class="title typeTwo"
          @click="onSelect(1)"
        >
          账户登录
        </div>
        <div style="height: 23px">
          <div v-if="this.loginType === 2" class="introduce">
            <i class="el-icon-message"></i>使用短信登录
          </div>
        </div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="" prop="phone">
            <el-input v-model="ruleForm.phone" placeholder="请输入手机号码">
              <template slot="prepend"
                ><i class="el-icon-mobile-phone"></i
              ></template>
              <el-button
                v-if="this.loginType === 2 && disabled"
                slot="append"
                class="getCode"
                :disabled="this.ruleForm.phone === ''"
                @click="verification"
                >获取验证码</el-button
              >
              <el-button
                v-if="!disabled && this.loginType === 2"
                slot="append"
                class="getCode"
                >{{ timer }}秒后重试</el-button
              >
            </el-input>
          </el-form-item>
          <el-form-item v-if="this.loginType === 2" label="" prop="code">
            <el-input v-model="ruleForm.code" placeholder="请输入验证码">
              <template slot="prepend"><i class="el-icon-lock"></i></template
            ></el-input>
          </el-form-item>
          <el-form-item v-if="this.loginType === 1" label="" prop="password">
            <el-input
              v-model="ruleForm.password"
              placeholder="请输入密码"
              show-password
            >
              <template slot="prepend"><i class="el-icon-lock"></i></template
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox
                label="我已同意《隐私条款》和 《服务条款》"
                name="type"
              >
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              id="registerSub"
              @click="submitForm('ruleForm')"
              >登录</el-button
            >
            <div class="link">
              <router-link :to="{ path: '/register' }"
                >忘记密码 免费注册</router-link
              >
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import LoginHeader from "@/components/LoginHeader";
import Footer from "@/components/Footer";
import Cookies from "js-cookie";
export default {
  components: {
    LoginHeader,
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
      loginType: 1, // 1 账户登录 2 手机验证码登录
      disabled: true,
      timer: 60,
      ruleForm: {
        phone: "",
        code: undefined,
        password: undefined,
        type: "",
      },
      rules: {
        phone: [{ required: true, validator: validatorPhone, trigger: "blur" }],
        code: [
          { required: true, message: "请输入手机验证码", trigger: "blur" },
        ],
        type: [{ required: true, message: "请勾选", trigger: "blur" }],
      },
    };
  },
  created() {
    // console.log(this.$route.path);
  },
  mounted() {},
  methods: {
    onSelect(type) {
      this.loginType = type;
    },
    verification() {
      // 手机号常规检验
      let reg =
        /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
      if (this.ruleForm.phone === "") {
        this.$message.error("手机号不能为空!");
        return false;
      }
      if (!reg.test(this.ruleForm.phone)) {
        this.$message.error("手机号格式错误!");
        return false;
      }
      this.disabled = false;
      // 调获取验证码接口
      this.getVerification();
      const authTimer = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          this.disabled = true;
          this.timer = 60;
          clearInterval(authTimer);
        }
      }, 1000);
    },
    getVerification() {
      this.$http
        .get("/verificationCode", {
          phone: this.ruleForm.phoneNumber,
        })
        .then((response) => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // /userInfo/login post
          this.$http
            .get("/static/login.json", {
              phone: this.ruleForm.phone,
              code: this.ruleForm.code,
              password: this.ruleForm.password,
            })
            .then((response) => {
              if (response.data.code === "10000") {
                this.$message({
                  message: response.data.message,
                  type: "success",
                });
                // 登陆成功之后 把返回的token 存入到 cookie里
                Cookies.set("token", response.data.data);
                this.getUserInfo();
              } else {
                this.$message.error(response.message);
              }
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // /basicInfo/findByPhone?phone=18811307278 get
    getUserInfo() {
      // 获取用户信息 /userInfo/findById get
      this.$http
        .get("/static/userInfo.json", {
          phone: this.ruleForm.phone, // 从本地缓存拿
        })
        .then(
          (res) => {
            localStorage.setItem("userInfo", JSON.stringify(res.data.data));
            this.$router.push("/");
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
.loginForm {
  width: 100%;
  min-width: 1200px;
  min-height: 500px;
  background: url("../assets/loginBg.png");
  background-size: cover;
  -moz-background-size: cover; /* 老版本的 Firefox */
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}
.loginForm .formList {
  width: 380px;
  padding: 30px;
  background: #fff;
  margin: auto;
  border-radius: 8px;
  margin-left: 785px;
  height: 355px;
}
.loginForm .formList .title {
  font-size: 23px;
  margin-left: 6px;
  margin-bottom: 15px;
  font-weight: 600;
  color: #adb3ab;
}
.loginForm .formList .title.cur {
  color: #3ac5ab;
}
.loginForm .formList .title.typeOne {
  float: right;
}
.loginForm form {
  margin-left: -93px;
  margin-top: 12px;
  height: 350px;
}
#loginPage .el-input__inner {
  border: 2px solid #66bcaf;
  border-color: #66bcaf !important;
}
#loginPage .el-icon-mobile-phone {
  font-size: 22px;
}
#loginPage .el-icon-lock {
  font-size: 22px;
}
#loginPage .el-input-group__prepend {
  border: 2px solid #5fb3a3;
  color: #5fb3a3;
}
.loginForm #registerSub {
  width: 100%;
  font-size: 22px;
  background: #5fb3a3;
}
.loginForm .getCode {
  font-size: 15px !important;
  color: #476962 !important;
  border: 1px solid #61b8a7 !important;
}
.loginForm .introduce {
  color: #67bdb0;
  text-align: right;
}
.loginForm .link {
  text-align: right;
  margin-top: 20px;
}
.loginForm .link a {
  text-decoration: none;
  color: #adaaaa;
}
</style>
