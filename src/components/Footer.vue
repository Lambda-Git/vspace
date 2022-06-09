<template>
  <div class="footer">
    <div class="list">
      <div class="title">关于我们</div>
      <div class="division">｜</div>
      <div class="title">帮助中心</div>
      <div class="division">｜</div>
      <div class="title">售后服务</div>
      <div class="division">｜</div>
      <div class="title">配送与验收</div>
      <div class="division">｜</div>
      <div class="title">商务合作</div>
      <div class="division">｜</div>
      <div class="title">搜索推荐</div>
      <div class="division">｜</div>
      <div class="title">友情链接</div>
    </div>
    <div class="about">
      <div class="info">CopyRight</div>
      <img src="../assets/footer.png" />
      <div class="info">vspace</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // activeIndex: '1',
      // activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.footer {
  width: 1200px;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 10px;
}
.list {
  display: flex;
  justify-content: center;
  font-size: 20px;
}
.list div.division {
  color: #a9a2a2;
  margin-right: 20px;
  margin-left: 20px;
}
.about {
  display: flex;
  justify-content: center;
  margin-top: 36px;
}

.about .info {
  font-size: 21px;
}
.about img {
  width: 18px;
  height: 18px;
  margin-top: 6px;
  margin-left: 13px;
  margin-right: 13px;
}
</style>>