<template>
  <div>
    <LoginHeader></LoginHeader>
    <div class="formContent" id="register">
      <div class="formList">
        <div class="title">手机注册</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="" prop="phoneNumber">
            <el-input
              v-model="ruleForm.phoneNumber"
              placeholder="请输入手机号码"
              prefix-icon="el-icon-mobile-phone"
            >
              <el-button
                slot="append"
                class="getCode"
                :disabled="this.ruleForm.phoneNumber === ''"
                >获取验证码</el-button
              ></el-input
            >
          </el-form-item>
          <el-form-item label="" prop="code">
            <el-input
              v-model="ruleForm.code"
              placeholder="请输入验证码"
              prefix-icon="el-icon-key"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              v-model="ruleForm.password"
              placeholder="请输入密码"
              show-password
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="passwordAgain">
            <el-input
              v-model="ruleForm.passwordAgain"
              placeholder="请输入确认密码"
              show-password
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              id="registerSub"
              @click="submitForm('ruleForm')"
              >立即注册</el-button
            >
            <div class="aboutInfo">
              我已阅读并接受<a class="link">《用户协议》</a>及<a class="link"
                >《用户协议》</a
              >
            </div>
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
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
export default {
  components: {
    LoginHeader,
    Footer,
  },
  data() {
    return {
      ruleForm: {
        phoneNumber: "",
        code: "",
        password: "",
        passwordAgain: "",
      },
      rules: {
        phoneNumber: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
        ],
        code: [
          { required: true, message: "请输入手机验证码", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        passwordAgain: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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

<style >
.formContent {
  width: 100%;
  min-width: 1200px;
  min-height: 650px;
  background: url("../assets/registerBg.png");
  background-size: cover;
  -moz-background-size: cover; /* 老版本的 Firefox */
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.formContent .formList {
  width: 380px;
  padding: 30px;
  background: #fff;
  margin: auto;
  opacity: 0.9;
  border-radius: 8px;
  height: 404px;
}
.formContent .formList .title {
  font-size: 23px;
  margin-left: 6px;
  margin-bottom: 15px;
  color: #107b67;
  font-weight: 600;
}
.formContent form {
  margin-left: -93px;
  height: 350px;
}
#register .el-input__inner {
  border: 2px solid #66bcaf;
  border-color: #66bcaf !important;
}
#register .el-input__icon.el-icon-mobile-phone {
    font-size: 22px;
}
#register .el-input__icon.el-icon-key {
    font-size: 22px;
}
#register .el-input__icon.el-icon-lock {
    font-size: 22px;
}
.formContent #registerSub {
  width: 100%;
  font-size: 22px;
  background: #5fb3a3;
}
.formContent .aboutInfo {
  text-align: center;
  margin-top: 15px;
}
.formContent .aboutInfo a.link {
  color: #242da5;
  cursor: pointer;
}
.formContent .getCode {
  font-size: 15px !important;
  color: #476962 !important;
  border: 1px solid #61b8a7 !important;
}
</style>