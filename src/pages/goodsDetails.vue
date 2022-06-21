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
      <div style="display: flex">
        <div>
          <div
            style="
              width: 430px;
              height: 430px;
              border: 1px solid #e2dbdb;
              border-radius: 3px;
              padding: 10px;
            "
          >
            <img
              style="
                width: 100%;
                height: 100%;
                border: 1px solid #e2dbdb;
                border-radius: 3px;
              "
              src="../assets/goodsDetail.jpg"
            />
          </div>
          <div style="width: 450px; display: flex; margin-top: 10px">
            <div class="imgType">
              <img
                style="width: 100%; height: 100%"
                src="../assets/goodsDetail.jpg"
              />
            </div>
            <div class="imgType" style="margin-left: 15px">
              <img
                style="width: 100%; height: 100%"
                src="../assets/goodsDetail.jpg"
              />
            </div>
            <div class="imgType" style="margin-left: 15px">
              <img
                style="width: 100%; height: 100%"
                src="../assets/goodsDetail.jpg"
              />
            </div>
          </div>
        </div>
        <div style="width: 100%; padding: 25px">
          <div style="font-size: 20px; font-weight: 500; color: #228664;">
            圣女果新鲜小番茄5斤水果当季整箱包邮蔬菜生吃自然熟西红柿千禧
          </div>
          <div style="display: flex;margin-top: 10px;">
            <div style="width: 100px;">价格</div>
            <div>¥ 89.00</div>
          </div>
          <div style="display: flex;margin-top: 10px;">
            <div style="width: 100px;">促销价</div>
            <div style="font-size: 18px;font-weight: 500;color: #228664;">¥ 29.80- 39.79</div>
          </div>
          <div>
            <div>
              <div>月销量:</div>
              <div>6000+</div>
            </div>
            <div>
              <div>积分:</div>
              <div>14起</div>
            </div>
          </div>
          <div>
            <div>详情描述</div>
            <div></div>
          </div>
          <div>
            <div>数量</div>
            <div></div>
          </div>
          <div style="width: 100%">
            <el-button
              style="color: rgb(98, 210, 161); width: 200px"
              plain
              @click="buys(item)"
              >立即购买</el-button
            >
            <el-button
              style="background: rgb(98, 210, 161); color: #fff; width: 200px"
              type="primary"
              plain
              @click="buys(item)"
              >加入购物车</el-button
            >
          </div>
        </div>
      </div>
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

.goodsDetail .imgType {
  cursor: pointer;
  width: 150px;
  border: 1px solid #e2dbdb;
  border-radius: 3px;
}

.goodsDetail .imgType:hover img {
  border: 1px solid #228664;
}
</style>