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
                v-if="disabled"
                slot="append"
                class="getCode"
                :disabled="this.ruleForm.phone === ''"
                @click="verification"
                >获取验证码</el-button
              >
              <el-button v-if="!disabled" slot="append" class="getCode"
                >{{ timer }}秒后重试</el-button>

              
              </el-input
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
    const validatorPhone = function (phone, value, callback) {
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
    // 密码验证
    const pwdCheck = async(rule, value, callback) => {
      if (value.length < 6) {
        return callback(new Error('密码不能少于6位！'));
      } else if (value.length > 16) {
        return callback(new Error('密码最长不能超过16位！'));
      } else {
        callback()
      }
    }
    // 重复密码验证
    const pwdAgainCheck = async(rule, value, callback) => {
      if (value.length < 1) {
        return callback(new Error('重复密码不能为空！'));
      } else if(this.ruleForm.password != this.ruleForm.passwordAgain){
        return callback(new Error('两次输入密码不一致！'));
      }else{
        callback()
      }
    };
    return {
      timer: 60,
      disabled: true,
      ruleForm: {
        phoneNumber: "",
        code: "",
        password: "",
        passwordAgain: "",
      },
      rules: {
        phoneNumber: [
          { required: true, validator: validatorPhone, trigger: "blur" },
        ],
        code: [
          { required: true, message: "请输入手机验证码", trigger: "blur" },
        ],
        password: [{ required: true, validator: pwdCheck,  trigger: "blur" }],
        passwordAgain: [
          { required: true,validator: pwdAgainCheck, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    verification() {
      // 手机号常规检验
       let reg =
        /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
      if (this.ruleForm.phoneNumber === "") {
        this.$message.error('手机号不能为空!');
        return  false
      } 
      if (!reg.test(this.ruleForm.phoneNumber)) {
        this.$message.error('手机号格式错误!');
        return  false
      } 
      this.disabled = false;
      // 调获取验证码接口
      this.verificationCode()
      const authTimer = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          this.disabled = true;
          this.timer = 60;
          clearInterval(authTimer);
        }
      }, 1000);
    },
     // 获取验证码
    verificationCode() {
      console.log(this.ruleForm.phoneNumber)
      this.$http
            .post("userInfo/login", {
              phone: this.ruleForm.phoneNumber,
            })
            .then((response) => {
              
            }
            );
    },
    // 获取验证码
    verificationCode() {
      console.log(this.ruleForm.phoneNumber)
      this.$http
            .post("userInfo/login", {
              phone: this.ruleForm.phoneNumber,
            })
            .then((response) => {
              
            }
            );
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
           this.$http
            .post("userInfo/register", {
              phone: this.ruleForm.phoneNumber,
            })
            .then((response) => {
              
            });
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