<template>
  <div class="menuContent">
    <div class="menu">
      <div>
        <router-link :to="{ path: '/login' }"> 请先登录 </router-link>
      </div>
      <div>
        <router-link :to="{ path: '/register' }"> 免费注册 </router-link>
      </div>
      <div>
        <router-link :to="{ path: '/personalCenter' }"> 我的订单 </router-link>
      </div>
      <div>
        <router-link :to="{ path: '/personalCenter' }"> 会员中心 </router-link>
      </div>
      <div>
        <router-link :to="{ path: '/login' }"> 帮助中心 </router-link>
      </div>
      <div>
        <router-link :to="{ path: '/login' }"> 关于我们 </router-link>
      </div>
      <div v-if="this.$route.path !== '/'">
        <!-- <router-link :to="{ path: '/login' }"> -->
          <div class="cart">
            <el-badge :value="$store.getters.getAllCount" class="item">
              <img src="../assets/shoppingCart3.png" />
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
      // activeIndex: '1',
      // activeIndex2: '1'
    };
  },66
   created() {
     if(JSON.parse(localStorage.getItem('car')) !== 'null') {
       this.$store.commit('addCar',JSON.parse(localStorage.getItem('car')))
     }
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