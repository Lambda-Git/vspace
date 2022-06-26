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
          <div style="font-size: 20px; font-weight: 500; color: #228664">
            圣女果新鲜小番茄5斤水果当季整箱包邮蔬菜生吃自然熟西红柿千禧
          </div>
          <div style="display: flex; margin-top: 20px">
            <div style="width: 100px">价格:</div>
            <div style="text-decoration: line-through">¥ 89.00</div>
          </div>
          <div style="display: flex; margin-top: 20px">
            <div style="width: 100px">促销价:</div>
            <div style="font-size: 18px; font-weight: 500; color: #228664">
              ¥ 29.80- 39.79
            </div>
          </div>
          <div style="display: flex; margin-top: 20px">
            <div style="width: 50%; display: flex; justify-content: center">
              <div>月销量:</div>
              <div style="color: #228664; margin-left: 15px">6000+</div>
            </div>
            <div style="border-right: 1px solid #ececec"></div>
            <div style="width: 50%; display: flex; justify-content: center">
              <div>积分:</div>
              <div style="color: #228664; margin-left: 15px">14起</div>
            </div>
          </div>
          <div style="margin-top: 20px">
            <div style="width: 100px; height: 55px; float: left">详情描述:</div>
            <div style="font-size: 14px">
              西红柿富含维生素A、维生素C、维生素B1、维生素B2、胡萝卜素等营养物质,西红柿富含维生素A、维生素C、维生素B1、维生素B2、胡萝卜素等营养物质,西红柿富含维生素A、维生素C、维生素B1、维生素B2、胡萝卜素等营养物质
            </div>
          </div>
          <div style="margin-top: 20px; display: flex">
            <div style="width: 100px; margin-top: 8px">数量:</div>
            <div>
              <el-input-number
                v-model="num"
                controls-position="right"
                @change="handleChange"
                :min="1"
              ></el-input-number>
            </div>
          </div>
          <div style="width: 100%; margin-top: 20px">
            <el-button
              style="color: rgb(98, 210, 161); width: 200px"
              plain
              @click="buyNow(item)"
              >立即购买</el-button
            >
            <el-button
              style="background: rgb(98, 210, 161); color: #fff; width: 200px"
              type="primary"
              plain
              @click="addToShopCar(item)"
              ><img
                style="position: absolute; margin-top: -1px; margin-left: -18px"
                src="../assets/shoppingCart3.png"
              />
              加入购物车</el-button
            >
          </div>
          <div
            style="
              width: 100%;
              margin-top: 30px;
              height: 170px;
              border: 1px solid #ececec;
              border-radius: 8px;
            "
          >
            <div
              style="
                padding: 8px;
                background: #62d2a1;
                width: 72px;
                color: #fff;
                margin-bottom: 5px;
              "
            >
              商品描述
            </div>
            <div style="display: flex; padding: 10px 5px; font-size: 14px">
              <div style="width: 50%; display: flex">
                <div>品牌名称:</div>
                <div>西红柿</div>
              </div>
              <div style="width: 50%; display: flex">
                <div>产品参数:</div>
                <div>XBSHHJDISIFHOSFHOFHOFHOS</div>
              </div>
            </div>
            <div style="display: flex; padding: 10px 5px; font-size: 14px">
              <div style="width: 50%; display: flex">
                <div>商品规格:</div>
                <div>每份500克</div>
              </div>
              <div style="width: 50%; display: flex">
                <div>生产日期</div>
                <div>2022年06月22日</div>
              </div>
            </div>
            <div style="display: flex; padding: 10px 5px; font-size: 14px">
              <div style="">商品有效期:</div>
              <div>冷藏: 15天</div>
              <div>常温: 5天</div>
            </div>
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
              <div class="grid_ontent" @click="buys(item)">
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
      num: 1,
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
    buys(data) {
      let { href } = this.$router.resolve({
        path: "/goodsDetails",
        query: { username: data.label },
      });
      window.open(href, "_blank");
    },
    buyNow(data) {
      let { href } = this.$router.resolve({
        path: "/shoppingCart",
        query: { username: data },
      });
      window.open(href, "_blank");
    },
    // 点击添加到购物车
    addToShopCar(item) {
      this.ballFlag = !this.ballFlag;
      var goodsInfo = {
        id: Date.now(),
        count: 2,
        price: 32,
        selected: true,
      };
      this.$store.commit("addCar", goodsInfo);
      console.log(this.$store);
    },

    handleChange(value) {
      console.log(value);
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

.promotion_items .items .grid_ontent:hover {
  border: 1px solid #228664;
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