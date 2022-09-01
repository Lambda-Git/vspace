<template>
  <div>
    <Header></Header>
    <div class="pesponCenter">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
    </div>
    <div class="line"></div>
    <div class="cards">
      <div class="title" style="display: flex">
        <div>购物车</div>
        <div>(全部{{ cartData.length }})</div>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="cartData"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="30"> </el-table-column>
          <el-table-column label="商品信息" width="650">
            <template slot-scope="scope">
              <div style="display: flex">
                <img style="width: 150px" src="../assets/cart-1.jpg" />
                <!-- <img style="width: 150px" :src="row.scope.picUrl" /> -->
                <div style="line-height: 143px;height: 143px;padding: 0 10px;color: #049866;">
                  {{ scope.row.descript }}
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="单价" width="100">
            <template slot-scope="scope">
              <div>
                <div style="text-decoration: line-through;margin-bottom: 20px;">
                  原价:{{ scope.row.productPrice }}
                </div>
                <div style="color: #049866;font-weight: 600">
                  折后:{{
                    (scope.row.productPrice * scope.row.discount).toFixed(2)
                  }}
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="数量" width="200">
            <template slot-scope="scope">
              <el-input-number
                v-model="scope.row.productCnt"
                :disabled="isSelect(scope.row.productId)"
                @change="handleChange"
                :min="1"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column prop="money" label="金额" width="180">
            <template slot-scope="scope">
              <div style="color: #009866; font-size: 18px; font-weight: 500">
                ¥{{ (scope.row.productPrice * scope.row.discount * scope.row.productCnt).toFixed(2) }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div
        style="
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin-top: 30px;
        "
      >
        <div style="display: flex; margin-right: 30px; margin-top: 8px">
          <div>已选商品</div>
          <div style="color: #009866; font-size: 18px; font-weight: 500">
            {{ this.multipleSelection.length }}
          </div>
          <div>件</div>
        </div>
        <div style="margin-right: 30px; display: flex; margin-top: 8px">
          <div style="margin-right: 8px">合计(不含运费),</div>
          <div style="color: #009866; font-size: 18px; font-weight: 500">
            ¥{{ this.totalPrice.toFixed(2) }}
          </div>
        </div>
        <div>
          <el-button
            :disabled="this.totalPrice === 0"
            style="
              background: #62d2a1;
              color: #fff;
              width: 120px;
              border-radius: 25px;
            "
            plain
            @click="settlement()"
            >结算</el-button
          >
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
      cartData: [],
      multipleSelection: [],
      totalPrice: 0,
    };
  },
  created() {
    console.log(this.$route.path);
  },
  mounted() {
    // 获取购物车列表
    this.getCardList();
  },
  methods: {
    // 获取购物车列表 /cartinfo/list  get
    getCardList() {
      this.$http.get("/static/cartList.json").then(
        (res) => {
          this.cartData = res.orderItemList;
        },
        (err) => {
          // 500响应
          console.log(err);
        }
      );
    },
    // 结算
    settlement() {
      localStorage.setItem('settlementList', JSON.stringify(this.multipleSelection))
      let { href } = this.$router.resolve({
        path: "/settlement",
        query: { username: "结算" },
      });
      window.open(href, "_blank");
    },
    handleSelectionChange(val) {
      let total = 0
      val.forEach(list => {
        total = total + (list.productPrice * list.discount * list.productCnt)
      });
      this.multipleSelection = val;
      this.totalPrice = total
    },
    // 判断当前结算勾选项
    isSelect(productId) {
      let flag = false
      this.multipleSelection.forEach(item => {
        if(item.productId === productId){
          flag = true
        }
      })
      return flag
    },
    handleChange() {},
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
.cards {
  width: 1200px;
  margin: auto;
}
</style>