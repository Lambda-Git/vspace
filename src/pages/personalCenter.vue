<template>
  <div>
    <Header></Header>
    <div class="pesponCenter">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="type">个人中心</div>
    </div>
    <div class="line"></div>
    <div class="pesponType">
      <div class="menu_left">
        <div  class="one"><i class="el-icon-s-custom"></i>个人中心</div>
        <div @click="onSelect(1)" :class="`two ${curSelect === 1 ? 'curSelect' : ''}`"><i class="el-icon-document-remove"></i>订单详情</div>
        <div @click="onSelect(2)"  :class="`two ${curSelect === 2 ? 'curSelect' : ''}`"><i class="el-icon-user"></i>用户基本信息</div>
        <div @click="onSelect(3)"  :class="`two ${curSelect === 3 ? 'curSelect' : ''}`"><i class="el-icon-unlock"></i>修改密码</div>
      </div>
      <div class="menu_right">
        <!-- 订单详情 -->
        <div v-if="curSelect === 1">1111</div>
        <!-- 用户基本信息 -->
        <div v-if="curSelect === 2">2222</div>
        <!-- 修改密码 -->
        <div v-if="curSelect == 3" class="userInfoForm" id="userInfoPage">
          <div class="formList">
            <el-form
              :model="userInfoForm"
              :rules="rules"
              ref="userInfoForm"
              label-width="100px"
            >
              <el-form-item label="" prop="phone">
                <el-input
                  v-model="userInfoForm.phone"
                  placeholder="请输入手机号码"
                ></el-input>
              </el-form-item>
              <el-form-item label="" prop="password">
                <el-input
                  v-model="userInfoForm.password"
                  placeholder="请输入密码"
                  show-password
                >
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  id="registerSub"
                  @click="submitForm('userInfoForm')"
                  >登录</el-button
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
      curSelect: 1, // 1 订单险情 2 用户基本信息 3 修改密码
      userInfoForm: {
        phone: undefined,
        code: undefined,
        password: undefined,
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
    console.log(this.$route.path);
  },
  mounted() {},
  methods: {
    onSelect(type) {
      this.curSelect = type
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$store.state.post("userInfo/login",{ // vuex
          this.$http
            .post("userInfo/login", {
              phone: this.ruleForm.phone,
              code: this.ruleForm.code,
              password: this.ruleForm.password,
            })
            .then((response) => {
              if (response.code === 2000) {
                this.$message({
                  message: response.message,
                  type: "success",
                });
                this.$router.push("/");
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
</style>