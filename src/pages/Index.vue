<template>
  <div>
    <Header></Header>
    <div class="content_index">
      <!-- 查询 type + input-->
      <div class="type_search">
        <div class="logo">
          <img src="../assets/logo.png" />
        </div>
        <div class="type_info">
          <div>首页</div>
          <div>团购</div>
          <div>折扣</div>
          <div>严选</div>
          <div>蔬菜</div>
          <div>生鲜</div>
          <div>冷冻</div>
          <div>蛋类</div>
          <div>酒水</div>
          <div>杂项</div>
        </div>
        <div class="search">
          <div>input</div>
          <div class="cart">
            <el-badge :value="200" :max="99" class="item">
              <img src="../assets/shoppingCart1.png">
            </el-badge>
          </div>
        </div>
      </div>
      <!-- 手风琴菜单 -->
      <div class="menu_level_two"></div>
      <!-- 美丽健康 more 跳转 -->
      <div class="health_more">
        <img src="../assets/health_more.png" alt="" />
        <div class="info">
          <div class="title">美丽健康吃出来</div>
          <div class="more">了解更多<i class="el-icon-d-arrow-right"></i></div>
        </div>
      </div>
      <!-- 促销商品 list-->
      <div class="promotion_items">
        <div class="title">促销商品</div>
        <div class="items">
          <el-row :gutter="20">
            <el-col
              :span="6"
              v-for="(item, index) in promotionProductData"
              :key="index"
            >
              <div class="grid_ontent">
                <div class="item_img"><img src="../assets/cart-1.jpg" /></div>
                <div class="productTitle">{{ item.productTitle }}</div>
                <div class="productPrice">
                  <div class="one">惊爆价:</div>
                  <div class="three">¥</div>
                  <div class="two">{{ item.productPrice }}</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 新鲜蔬菜 more 跳转 -->
      <div class="fresh_vegetables">
        <img src="../assets/fresh_vegetables.png" alt="" />
        <div class="info">
          <div class="title">新鲜蔬菜快速通道</div>
          <div class="more">点击进入<i class="el-icon-d-arrow-right"></i></div>
        </div>
      </div>
      <!-- 最新上架 list -->
      <div class="promotion_items">
        <div class="title">最新上架</div>
        <div class="items">
          <el-row :gutter="20">
            <el-col
              :span="6"
              v-for="(item, index) in latestProductData"
              :key="index"
            >
              <div class="grid_ontent">
                <div class="item_img"><img src="../assets/cart-1.jpg" /></div>
                <div class="productTitle">{{ item.productTitle }}</div>
                <div class="productPrice">
                  <div class="one">惊爆价:</div>
                  <div class="three">¥</div>
                  <div class="two">{{ item.productPrice }}</div>
                </div>
              </div>
            </el-col>
          </el-row>
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
  name: "Index",
  data() {
    return {
      promotionProductData: [],
      latestProductData: [],
    };
  },
  created() {
    console.log(this.$route.path);
  },
  mounted() {
    // 获取促销商品
    this.$http.get("/static/promotionProduct.json").then(
      (res) => {
        this.promotionProductData = res.data;
      },
      (err) => {
        // 500响应
        console.log(err);
      }
    );
    // 获取 最新商品
    this.$http.get("/static/latestProduct.json").then(
      (res) => {
        this.latestProductData = res.data;
      },
      (err) => {
        // 500响应
        console.log(err);
      }
    );
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content_index {
  width: 1200px;
  margin: auto;
  /* padding: 0 30px; */
}
.menu_level_two {
  height: 400px;
}
.health_more img {
  width: 100%;
  height: 240px;
  border-radius: 3px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
}
.health_more .info {
  position: absolute;
  margin-top: -100px;
  margin-left: 237px;
}
.health_more .info .title {
  font-size: 30px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: 600;
}
.health_more .info .more {
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  margin-top: -43px;
  margin-left: -119px;
  background: #9ebfb4;
  width: 99px;
}
.health_more .info .more:hover {
  color: #dc7e2b;
}
.promotion_items .title {
  text-align: center;
  font-size: 39px;
  letter-spacing: 25px;
  font-weight: 600;
  color: #228664;
  padding: 25px;
}
.promotion_items .items .grid_ontent {
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin-bottom: 20px;
}

.promotion_items .items .grid_ontent .item_img {
  text-align: center;
  margin-bottom: -20px;
}

.promotion_items .items .grid_ontent img {
  width: 80%;
}

.promotion_items .items .grid_ontent .productTitle {
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
}

.promotion_items .items .grid_ontent .productPrice {
  display: flex;
  margin-bottom: 30px;
}

.promotion_items .items .grid_ontent .productPrice .one {
  margin-left: 82px;
  font-size: 15px;
}
.promotion_items .items .grid_ontent .productPrice .two {
  margin-left: 12px;
  font-size: 18px;
  font-weight: 600;
  color: #52c59f;
  margin-top: -2px;
}
.promotion_items .items .grid_ontent .productPrice .three {
  font-size: 18px;
  margin-left: 8px;
  margin-top: -2px;
}
.fresh_vegetables img {
  width: 100%;
  height: 185px;
  border-radius: 3px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
}
.fresh_vegetables .info {
  position: absolute;
  margin-top: -123px;
  width: 1200px;
  text-align: center;
  color: #fff;
}
.fresh_vegetables .info .title {
  font-size: 34px;
  letter-spacing: 20px;
  font-weight: 600;
}

.fresh_vegetables .info .more {
  margin-left: 900px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
}
.fresh_vegetables .info .more:hover {
  color: #dc7e2b;
}
.type_search {
  display: flex;
  padding: 25px 0;
}
.type_search .type_info {
  margin-left: 15px;
  display: flex;
  line-height: 45px;
}
.type_search .type_info div {
  color: #488c60;
  font-size: 17px;
  font-weight: 600;
  margin-right: 28px;
}
.type_search .logo img {
  width: 200px;
}
.type_search .search {
 display: flex;
}
.type_search .search .cart{
  
}
</style>
