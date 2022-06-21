<template>
  <div>
    <Header></Header>
    <div class="pesponCenter">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
    </div>
    <div class="line"></div>
    <div class="goodsType">
      <div class="left" style="width: 250px">
        <div
          style="
            width: 250px;
            background: #009866;
            color: #fff;
            text-align: center;
            height: 40px;
            line-height: 40px;
            font-size: 22px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          "
        >
          分类
        </div>
        <el-tree
          class="filter-tree"
          :data="Treedata"
          :props="defaultProps"
          default-expand-all
          ref="tree"
          @node-click="handleNodeClick"
        >
        </el-tree>
        <div style="width: 250px; margin-top: 20px">
          <img
            style="width: 100%; border-radius: 6px"
            src="../assets/left_one.jpg"
          />
        </div>
        <div style="width: 250px; margin-top: 40px">
          <img
            style="width: 100%; border-radius: 6px"
            src="../assets/left_two.png"
          />
        </div>
      </div>
      <div class="right">
        <div class="goodsList">
          <div style="padding: 0 30px; width: 750px">
            <div
              v-for="(item, index) in ProductData"
              :key="index"
              style="
                height: 200px;
                width: 100%;
                border: 1px solid #e2dbdb;
                border-radius: 4px;
                margin-bottom: 20px;
              "
            >
              <div style="padding: 10px; display: flex">
                <div style="border: 1px solid #e2dbdb">
                  <img style="width: 170px" src="../assets/cart-1.jpg" />
                </div>
                <div style="width: 100%; padding-left: 20px">
                  <div style="display: flex">
                    <div>南非西柚5斤</div>
                    <div>红心西柚大果孕妇柚子</div>
                  </div>
                  <div style="color: 009866">¥ 29.69</div>
                  <div>
                    南非西柚5斤,红心西柚大果孕妇柚子进口葡萄柚水果包邮新鲜鲜果,空运到北京,新鲜多汁,口中爆浆的感觉你值得拥有,现在下单,两小时送到你手中。
                  </div>
                  <div>
                    <el-button
                      style="background: rgb(98, 210, 161); color: #fff"
                      type="primary"
                      plain
                      @click="buys(item)"
                      >购买</el-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      Treedata: [
        {
          id: 1,
          label: "蔬菜豆制品",
          children: [
            {
              id: 1.1,
              label: "土豆",
            },
            {
              id: 1.2,
              label: "大白菜",
            },
            {
              id: 1.3,
              label: "干豆角",
            },
          ],
        },
        {
          id: 2,
          label: "肉禽蛋",
          children: [
            {
              id: 2.1,
              label: "鸡胸肉",
            },
            {
              id: 2.2,
              label: "牛棒骨",
            },
            {
              id: 2.3,
              label: "鹌鹑蛋",
            },
          ],
        },
        {
          id: 3,
          label: "海鲜水产",
          children: [
            {
              id: 3.1,
              label: "龙虾",
            },
            {
              id: 3.2,
              label: "海参",
            },
            {
              id: 3.3,
              label: "帝王蟹",
            },
          ],
        },
      ],
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
        query: { username: item  },
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
.goodsType {
  width: 1000px;
  margin: auto;
  display: flex;
  margin-bottom: 30px;
}

.el-tree {
  color: #fff;
  background: #62d2a1;
  padding: 15px;
}
span.el-tree-node__label {
  font-size: 18px;
  font-weight: 600;
}
.el-tree-node:focus > .el-tree-node__content {
  background: #009866;
  border-radius: 5px;
}
.el-tree-node__content:hover,
.el-upload-list__item:hover {
  background: #009866;
  border-radius: 5px;
}
</style>