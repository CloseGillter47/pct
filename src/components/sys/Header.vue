<template>
  <div class="header-box">
    <div class="logo-content">

    </div>
    <div class="title-content">

    </div>
    <div class="tool-content">
      <icon-btn/>
      <!-- <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
    </div>
  </div>
</template>

<script>
import iconBtn from "./IconButton.vue";
export default {
  name: "InsoHeader",
  data() {
    return {};
  },

  components: {
    iconBtn
  }
};
</script>

<style lang="scss">
.header-box {
  width: 100%;
  height: 100%;
  max-height: 54px;
  background: $primaryColor;
  z-index: 1000;

  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  display: flex;
  flex-direction: row;
  .logo-content {
    width: 200px;
    height: 100%;
    background: wheat;
  }
  .title-content {
    flex-grow: 2;
    height: 100%;
    background: gray;
  }
  .tool-content {
    width: 200px;
    height: 100%;
    background: green;
  }
}
</style>


<style scoped>
h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
