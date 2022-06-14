<template>
  <div>
    <Header></Header>
    <div class="content_index">
      <!-- 查询 type + input-->
      <div class="type_search"></div>
      <!-- 手风琴菜单 -->
      <div class="menu_level_two"></div>
      <!-- 美丽健康 more 跳转 -->
      <div class="health_more">
        <img src="../assets/health_more.png" alt="" />
      </div>
      <!-- 促销商品 list-->
      <div class="promotion_items"></div>
      <!-- 新鲜蔬菜 more 跳转 -->
      <div class="fresh_vegetables">
        <img src="../assets/fresh_vegetables.png" alt="" />
      </div>
      <!-- 最新上架 list -->
      <div class="new_arrival"></div>
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
  name: "Index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content_index {
  width: 1140px;
  margin: auto;
  padding: 0 30px;
}
.health_more img {
  width: 100%;
  height: 185px;
  border-radius: 3px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
}
.fresh_vegetables img {
  width: 100%;
  height: 185px;
  border-radius: 3px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
}
</style>
