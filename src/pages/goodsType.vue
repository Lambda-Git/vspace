<template>
  <div>
    <Header></Header>
    <div class="pesponCenter">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="type_search">
          <div class="searchInfo">
            <i @click="searchFor()" style="cursor: pointer" class="el-icon-search"></i><input v-model="curCategoryName" placeholder="搜一搜" />
          </div>
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
          :highlight-current="true"
          node-key="categoryId"
          :current-node-key="currentNodekey"
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
                  <div
                    style="
                      display: flex;
                      font-size: 18px;
                      font-weight: 600;
                      letter-spacing: 4px;
                      margin-bottom: 10px;
                    "
                  >
                    <div>南非西柚5斤</div>
                    <div style="margin-left: 20px">红心西柚大果孕妇柚子</div>
                  </div>
                  <div
                    style="
                      font-size: 20px;
                      font-weight: 600;
                      color: #039766;
                      margin-bottom: 10px;
                    "
                  >
                    ¥ 29.69
                  </div>
                  <div style="margin-bottom: 10px; font-size: 14px">
                    南非西柚5斤,红心西柚大果孕妇柚子进口葡萄柚水果包邮新鲜鲜果,空运到北京,新鲜多汁,口中爆浆的感觉你值得拥有,现在下单,两小时送到你手中。
                  </div>
                  <div>
                    <el-button
                      style="
                        background: rgb(98, 210, 161);
                        color: #fff;
                        width: 90px;
                        border-radius: 25px;
                      "
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
      curCategoryName: '',
      currentNodekey: undefined,
      ProductData: [1, 2, 3, 4, 5, 6],
      defaultProps: {
        children: "children",
        label: "categoryName",
      },
      Treedata: [],
    };
  },
  created() {
    console.log(this.$route.path);
    this.getAllProductCategories()
  },
  mounted() {
    // 输入查询跳转 过来 给input框赋值
    this.curCategoryName = this.$route.query.categoryName === undefined ? '' : this.$route.query.categoryName
    this.currentNodekey = this.$route.query.categoryId === undefined ? undefined : this.$route.query.categoryId
  },
  methods: {
     getAllProductCategories(){
      // 获取所有商品分类 
      this.$http.get("/static/allProductCategories.json").then(
        (res) => {
          this.Treedata = this.rray2Tree(res.data)
          //一定要加这个选中了否则样式没有出来
          this.$nextTick(() => {
            this.$refs.tree.setCurrentKey(this.$route.query.categoryId); 
           });
        },
        (err) => {
          // 500响应
          console.log(err);
        }
      );
    },
    searchFor() {
      console.log(this.curCategoryName)
    },
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
    handleNodeClick(data) {
      console.log(data);
    },
    rray2Tree(arr){
        if(!Array.isArray(arr) || !arr.length) return;
        let map = {};
        arr.forEach(item => map[item.categoryId] = item);

        let roots = [];
        arr.forEach(item => {
            const parent = map[item.parentId];
            if(parent){
                (parent.children || (parent.children=[])).push(item);
            }
            else{
                roots.push(item);
            }
        })

        return roots;
    }
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
 .type_search{
  margin-left: 700px;
    margin-top: 18px;
 }
.type_search .searchInfo i {
  margin-left: 55px;
  position: relative;
}
.type_search .searchInfo input {
  width: 150px;
  height: 25px;
  font-size: 16px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #e0dada;
  margin-top: 5px;
  outline: none;
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
  font-size: 16px;
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
.el-tree--highlight-current .is-current.el-tree-node > .el-tree-node__content {
  background-color: #009866 !important;
  border-radius:5px;
}
</style>