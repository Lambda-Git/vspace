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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      nickName: "",
      // activeIndex: '1',
      // activeIndex2: '1'
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
      this.nickName = JSON.parse(localStorage.getItem("userInfo")).nickName;
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
</style>>