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
        <div>(全部{{ tableData.length }})</div>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="30"> </el-table-column>
          <el-table-column label="商品信息" width="700">
            <template slot-scope="scope">
              <div style="display: flex">
                <img style="width: 150px" src="../assets/cart-1.jpg" />
                <div>
                  {{ scope.row.info }}
                </div>
                <div>净含量:2500g</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="单价" width="80">
          </el-table-column>
          <el-table-column prop="count" label="数量" width="200">
            <template slot-scope="scope">
              <el-input-number
                v-model="scope.row.count"
                @change="handleChange"
                :min="1"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column prop="money" label="金额" width="80">
            <template slot-scope="scope">
              <div style="color: #009866; font-size: 18px; font-weight: 500">
                ¥{{ scope.row.price * scope.row.count }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="action" label="操作" width="180">
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
            ¥{{ this.totalPrice }}
          </div>
        </div>
        <div>
          <el-button
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
      ProductData: [1, 2, 3, 4, 5, 6],
      tableData: [
        {
          price: 14,
          count: 20,
          money: 100.0,
          info: "新鲜紫甘蓝农家现摘卷心菜沙拉椰菜紫包菜蔬菜10斤整箱包邮",
        },
        {
          price: 17.99,
          count: 3,
          money: 1020.0,
          info: "新鲜紫甘蓝农家现摘卷心菜沙拉椰菜紫包菜蔬菜10斤整箱包邮",
        },
        {
          price: 14.99,
          count: 100,
          money: 1100.0,
          info: "新鲜紫甘蓝农家现摘卷心菜沙拉椰菜紫包菜蔬菜10斤整箱包邮",
        },
        {
          price: 14.99,
          count: 100,
          money: 1100.0,
          info: "新鲜紫甘蓝农家现摘卷心菜沙拉椰菜紫包菜蔬菜10斤整箱包邮",
        },
        {
          price: 14.99,
          count: 100,
          money: 1100.0,
          info: "新鲜紫甘蓝农家现摘卷心菜沙拉椰菜紫包菜蔬菜10斤整箱包邮",
        },
        {
          price: 14.99,
          count: 100,
          money: 1100.0,
          info: "新鲜紫甘蓝农家现摘卷心菜沙拉椰菜紫包菜蔬菜10斤整箱包邮",
        },
      ],
      multipleSelection: [],
      totalPrice: 0.0,
    };
  },
  created() {
    console.log(this.$route.path);
  },
  mounted() {},
  methods: {
    onSelect(type) {
      this.curSelect = type;
    },
    // 结算
    settlement() {
      let { href } = this.$router.resolve({
        path: "/settlement",
        query: { username: '结算' },
      });
      window.open(href, "_blank");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
.cards {
  width: 1200px;
  margin: auto;
}
</style>