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
              <div
                style="float: right; margin-top: 3px; margin-right: 28px"
              ></div>
              <div style="display: flex">
                <div
                  style="
                    font-size: 15px;
                    font-weight: 600;
                    margin-left: 20px;
                    margin-right: 30px;
                  "
                >
                  {{ item.gmtCreate }}
                </div>
                <div>订单号: {{ item.orderDetailId }}</div>
              </div>
            </div>
            <div style="display: flex; padding: 10px; width: 100%">
              <div style="display: flex">
                <div>
                  <img style="width: 126px" src="../assets/cart-1.jpg" />
                </div>
                <div style="width: 200px">
                  <div style="margin-top: 29px; margin-bottom: 20px">
                    品类:{{ item.productTitle }}
                  </div>
                  <div>支付方式: {{ item.paymentMethod }}</div>
                </div>
              </div>
              <div style="line-height: 121px; width: 200px; text-align: center">
                总价：¥ {{ item.totalPrice }}
              </div>
              <div style="line-height: 121px; width: 100px; text-align: center">
                数量：{{ item.productCnt }}
              </div>
              <div style="line-height: 121px; text-align: center; width: 220px">
                <div v-if="item.payStatus === '已支付'" style="color: #60b17d">
                  {{ item.payStatus }}
                </div>
                <div v-if="item.payStatus !== '已支付'" style="color: red">
                  {{ item.payStatus }}
                </div>
              </div>
            </div>
          </div>
          <el-pagination
            style="text-align: center; margin-bottom: 31px"
            background
            layout="prev, pager, next"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :total="total"
            :page-size="pagesize"
          >
          </el-pagination>
        </div>
        <!-- 用户基本信息 -->
        <div v-if="curSelect === 2">
          <div class="formList" style="padding: 30px">
            <el-form
              :model="userInfoForm"
              :rules="userInfoRules"
              ref="userInfoForm"
              label-width="100px"
            >
              <el-form-item label="手机号码" prop="phone">
                <el-input
                  style="width: 250px"
                  v-model="userInfoForm.phone"
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

              <el-form-item label="真实姓名" prop="userUame">
                <el-input
                  style="width: 250px"
                  v-model="userInfoForm.userUame"
                  placeholder="请输入真实姓名"
                >
                </el-input>
              </el-form-item>

              <el-form-item label="证件类型" prop="identityCardType">
                <el-radio-group v-model="userInfoForm.identityCardType">
                  <el-radio :label="1">身份证</el-radio>
                  <el-radio :label="2">军官证</el-radio>
                  <el-radio :label="3">军官证</el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="邮箱" prop="userEmail">
                <el-input
                  style="width: 250px"
                  v-model="userInfoForm.userEmail"
                  placeholder="请输入邮箱"
                >
                </el-input>
              </el-form-item>

              <el-form-item label="性别" prop="userGender">
                <el-radio-group v-model="userInfoForm.userGender">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="用户积分">
                <el-input
                  style="width: 250px"
                  v-model="userInfoForm.userPoint"
                  disabled
                >
                </el-input>
              </el-form-item>

              <el-form-item label="注册时间">
                <el-date-picker
                  style="width: 250px"
                  v-model="userInfoForm.registerTime"
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

              <el-form-item label="会员等级" prop="levelId">
                <el-radio-group disabled v-model="userInfoForm.levelId">
                  <el-radio :label="1">普通会员</el-radio>
                  <el-radio :label="2">青铜</el-radio>
                  <el-radio :label="3">白银</el-radio>
                  <el-radio :label="4">黄金</el-radio>
                  <el-radio :label="5">钻石</el-radio>
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
                  @click="resetForm('userInfoForm')"
                  >取消</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!-- 修改密码 -->
        <div v-if="curSelect == 3" class="passwordForm" id="passwordPage">
          <div class="formList" style="padding: 30px">
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
                  show-password
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
  watch: {
    $route(now, old) {
      this.$router.go(0);
    },
  },
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
    // 密码验证
    const pwdCheck = async (rule, value, callback) => {
      if (value.length < 6) {
        return callback(new Error("密码不能少于6位！"));
      } else if (value.length > 16) {
        return callback(new Error("密码最长不能超过16位！"));
      } else {
        callback();
      }
    };
    // 重复密码验证
    const pwdAgainCheck = async (rule, value, callback) => {
      if (value.length < 1) {
        return callback(new Error("重复密码不能为空！"));
      } else if (
        this.passwordForm.newPassword != this.passwordForm.confirmPassword
      ) {
        return callback(new Error("两次输入密码不一致！"));
      } else {
        callback();
      }
    };
    return {
      total: 0,
      pagesize: 5,
      curPage: 1,
      curSelect: 2, // 1 订单险情 2 用户基本信息 3 修改密码
      orderData: [1, 2, 3, 4],
      userInfoForm: {
        phone: "",
        levelId: 0, // 会员级别:1 普通会员，2 青铜，3白银，4黄金，5钻石
        nickName: "",
        userUame: "",
        userEmail: "",
        identityCardType: 0, // 证件类型:1 身份证，2 军官证，3 护照
        gmtGreate: "",
        userGender: "",
        userPoint: 0, // 用户积分
        registerTime: "",
        birthday: "",
      },
      userInfoRules: {
        phone: [{ required: true, validator: validatorPhone, trigger: "blur" }],
        nickName: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        userUame: [
          { required: true, message: "请输入真实姓名", trigger: "blur" },
        ],
        identityCardType: [
          { required: true, message: "请选择", trigger: "blur" },
        ],
        userEmail: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        userGender: [
          { required: true, message: "请选择性别", trigger: "blur" },
        ],
        levelId: [{ required: true, message: "请选择", trigger: "blur" }],
      },
      // 修改密码表单
      passwordForm: {
        password: "",
        newPassword: "",
        confirmPassword: "",
      },
      passwordRules: {
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        newPassword: [{ required: true, validator: pwdCheck, trigger: "blur" }],
        confirmPassword: [
          { required: true, validator: pwdAgainCheck, trigger: "blur" },
        ],
      },
    };
  },
  created() {
    console.log(this.$route.path);
    this.getOrderList();
    this.getUserInfo();
  },
  mounted() {
    console.log(" parseInt(this.$route.query.type)");
    console.log(parseInt(this.$route.query.type));
    this.$nextTick(() => {
      this.curSelect = parseInt(this.$route.query.type);
    });
  },
  methods: {
    getUserInfo() {
      // 获取用户信息 /userInfo/findById get
      this.$http
        .get("/static/userInfo.json", {
          phone: JSON.parse(localStorage.getItem("userInfo")).phone, // 从本地缓存拿
        })
        .then(
          (res) => {
            this.userInfoForm = res.data.data;
          },
          (err) => {
            // 500响应
            console.log(err);
          }
        );
    },
    getOrderList() {
      // 获取订单列表 url /orderinfo/list get
      this.$http
        .get("/static/orderList.json", {
          currentPage: this.curPage,
          pageSize: this.pageSize,
        })
        .then(
          (res) => {
            console.log(res)
            this.orderData = res.data.rows;
            this.total = res.data.total;
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 分页
    handleCurrentChange(val) {
      this.curPage = val;
      this.getOrderList();
      console.log(`当前页: ${val}`);
    },
    // 修改密码
    submitFormPassword(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http
            .post("userInfo/update", {
              password: this.passwordForm.password,
              newPassword: this.passwordForm.newPassword,
            })
            .then((response) => {
              if (response.code === 2000) {
                this.$message({
                  message: response.message,
                  type: "success",
                });
              } else {
                this.$message.error(response.message);
              }
            });
        } else {
          return false;
        }
      });
    },
    // 基本信息修改
    submitFormUserInfo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http
            .post("userInfo/update", {
              phone: this.userInfoForm.phone,
              nickName: this.userInfoForm.nickName,
              userUame: this.userInfoForm.userUame,
              identityCardType: this.userInfoForm.identityCardType,
              userEmail: this.userInfoForm.userEmail,
              userGender: this.userInfoForm.userGender,
              levelId: this.userInfoForm.levelId,
            })
            .then((response) => {
              if (response.code === 2000) {
                this.$message({
                  message: response.message,
                  type: "success",
                });
              } else {
                this.$message.error(response.message);
              }
            });
          // 模拟成功
          this.$message({
            message: "用户基本信息修改成功!",
            type: "success",
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
