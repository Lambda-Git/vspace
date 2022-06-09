<template>
  <div class="pageContent">
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="title">{{title}}</div>
    <div class="link">
      <router-link :to="{ path: '/' }"> 进入网站首页 >></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  created () {
    this.title = this.$route.path === '/login' ? '欢迎登录' : '欢迎注册'
  },
  methods: {},
};
</script>

<style scoped>
.pageContent {
  width: 1140px;
  margin: auto;
  padding: 20px 30px;
  height: 72px;
}
div.logo img {
  width: 250px;
  float: left;
}
div.title {
  font-size: 28px;
  float: left;
  margin-top: 18px;
  margin-left: 23px;
}

div.link a {
  margin-top: 29px;
  font-size: 19px;
  color: #009866;
  float: right;
  text-decoration: none;
}
</style>>