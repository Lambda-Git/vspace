<template>
  <div class="menuContent">
    <div class="menu">
      <div
        v-if="isLogin !== false"
        style="font-size: 19px; color: #d2d1b4; font-weight: 700"
      >
        < 欢迎您！{{ nickName }} >
      </div>
      <div v-if="isLogin === false">
        <router-link :to="{ path: '/login' }"> 请先登录 </router-link>
      </div>
      <div v-if="isLogin === false">
        <router-link :to="{ path: '/register' }"> 免费注册 </router-link>
      </div>
      <div>
        <router-link :to="{ path: '/' }"> 首页 </router-link>
      </div>
      <div>
        <router-link :to="{ path: '/personalCenter', query: { type: 1 } }">
          我的订单
        </router-link>
      </div>
      <div>
        <router-link :to="{ path: '/personalCenter', query: { type: 2 } }">
          会员中心
        </router-link>
      </div>
      <div>
        <router-link :to="{ path: '/personalCenter', query: { type: 3 } }">
          修改密码
        </router-link>
      </div>
      <div v-if="this.$route.path !== '/'">
        <!-- <router-link :to="{ path: '/login' }"> -->
        <div class="cart">
          <el-badge :value="$store.getters.getAllCount" class="item">
            <router-link :to="{ path: '/shoppingCart' }">
              <img src="../assets/shoppingCart3.png" />
            </router-link>
          </el-badge>
        </div>
        <!-- </router-link> -->
      </div>

      <div class="loginOut" @click="loginOut()">退出登录</div>
    </div>
    <el-dialog
      title="确认"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span
        style="
          font-size: 15px;
          color: #e46c4a;
          font-weight: 500;
          margin-left: 39px;
        "
        >确认退出vspace电商平台?</span
      >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureLoginOut">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      isLogin: false,
      nickName: "",
      dialogVisible: false,
    };
  },
  mounted() {
    console.log("localStorage.car");
    console.log(localStorage.getItem("car"));
    if (localStorage.getItem("car") !== null) {
      // this.$store.commit("addCar", JSON.parse(localStorage.getItem("car")));
    }
    // 从本地缓存中拿数据
    if (localStorage.getItem("userInfo") !== null) {
      this.isLogin = true;
      this.nickName = JSON.parse(localStorage.getItem("userInfo")).phone;
    } else {
      this.$message({
        message: "请您先登录！",
        type: "warning",
      });
      setTimeout(() => {
        this.$router.push("/login");
      }, 3000);
    }
    console.log('localStorage.getItem("userInfo")');
    console.log(JSON.parse(localStorage.getItem("userInfo")));
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    loginOut() {
      // 弹出确认框
      this.dialogVisible = true;
    },
    sureLoginOut() {
      // 退出登录 /userInfo/loginOut  get
      this.$http
        .get("/static/loginOut.json", {
          phone: JSON.parse(localStorage.getItem("userInfo")).phone, // 从本地缓存拿
        })
        .then(
          (res) => {
            Cookies.remove("token");
            localStorage.removeItem("userInfo");
            this.$router.push("/login");
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

<style scoped>
.menuContent {
  background: #619c76 repeat-x;
}
.menu {
  height: 50px;
  width: 1140px;
  padding: 0 30px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  text-align: right;
}
.menu div {
  margin-left: 30px;
  line-height: 50px;
}
.menu div a {
  color: #fff;
  text-decoration: none;
}

.menu .cart {
  margin-left: 32px;
  margin-top: 10px;
  cursor: pointer;
}
.menu .cart img {
  width: 25px;
}
.loginOut {
  cursor: pointer;
  color: #fff;
}
</style>>