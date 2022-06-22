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
        <div>(全部2)</div>
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
              <img src="../assets/cart-1.jpg" />
              <div>
                {{scope.price}}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="单价" width="80">
          </el-table-column>
          <el-table-column prop="count" label="数量" width="80" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="money" label="金额" width="80" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="action" label="操作" width="180" show-overflow-tooltip>
          </el-table-column>
        </el-table>
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
      tableData:[
        {price: 14,count: 20,money: 100.00, },
        {price: 17.99,count: 3,money: 1020.00, },
        {price: 14.99,count: 100,money: 1100.00, },
      ]
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
    buys(item) {
      let { href } = this.$router.resolve({
        path: "/goodsDetails",
        query: { username: item },
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
.cards {
  width: 1200px;
  margin: auto;
  height: 400px;
}
</style>