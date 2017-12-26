<template>
  <div class="header-box">
    <div class="logo-content">
      Kuroko
    </div>
    <div class="title-content">
      <div class="_tool-left">
        <icon-btn icon="mdi mdi-menu"/>
      </div>
      <div class="_title-center">
        人工智障系统
      </div>
      <div class="_tool-right">
        <icon-btn icon="el-icon-search"/>
      </div>
    </div>
    <div class="tool-content">
      <kur-badge mode="mini">
        <icon-btn icon="el-icon-bell"/>
      </kur-badge>
      <kur-badge mode="number" count="2">
        <icon-btn icon="el-icon-message"/>
      </kur-badge>
      <icon-btn icon="el-icon-goods"/>
      <icon-btn icon="mdi mdi-dots-vertical"/>
      
    </div>
  </div>
</template>

<script>
import iconBtn from "./IconButton.vue";
import kurBadge from "./Badge.vue";
export default {
  name: "InsoHeader",
  data() {
    return {};
  },

  components: {
    iconBtn,
    kurBadge
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

  color: #fff;

  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  display: flex;
  flex-direction: row;
  .logo-content {
    width: 240px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-style: oblique;
  }
  .title-content {
    flex-grow: 2;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    ._tool-left {
      padding-left: 2px;
      padding-right: 2px;
    }
    ._title-center {
      padding-left: 2px;
      padding-right: 2px;
      flex-grow: 2;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    ._title-center.text-ali-left {
      justify-content: flex-start;
    }
    ._title-center.text-ali-center {
      justify-content: flex-center;
    }
    ._title-center.text-ali-right {
      justify-content: flex-end;
    }
    ._tool_right {
      padding-left: 2px;
      padding-right: 2px;
    }
  }
  .tool-content {
    padding: 0 $paddingW;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
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
