<template>
  <div>
    <Header></Header>
    <div class="pesponCenter">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
    </div>
    <div class="line"></div>

    <div class="goodsDetail">
      
    </div>

    <!-- 商品推荐 list-->
    <div class="recommendItem">
      <div class="promotion_items">
        <div class="title">商品推荐</div>
        <div class="items">
          <el-row :gutter="20">
            <el-col
              :span="6"
              v-for="(item, index) in recommendData"
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
  data() {
    return {
      ProductData: [1, 2, 3, 4, 5, 6],
      recommendData: [],
    };
  },
  created() {
    console.log(this.$route.path);
  },
  mounted() {
    this.$http.get("/static/promotionProduct.json").then(
      (res) => {
        this.recommendData = res.data;
      },
      (err) => {
        // 500响应
        console.log(err);
      }
    );
  },
  methods: {
    onSelect(type) {
      this.curSelect = type;
    },
    buys() {
      let { href } = this.$router.resolve({
        path: "/goodsType",
        query: { username: data.label },
      });
      window.open(href, "_blank");
    },
  },
};
</script>
<style>
.pesponCenter {
  padding: 20px 0px;
  width: 1200px;
  margin: auto;
  display: flex;
}

.pesponCenter .logo img {
  width: 200px;
}
.line {
  width: 1200px;
  margin: auto;
  border-bottom: 2px solid #009866;
  margin-bottom: 20px;
}

.goodsDetail {
  width: 1200px;
  margin: auto;
}

.recommendItem {
  width: 1200px;
  margin: auto;
}

.promotion_items .title {
  text-align: center;
  font-size: 25px;
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
</style>