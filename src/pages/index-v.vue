<template>
  <div class="container-layout">
    <div class="header-layout">
      <inso-header></inso-header>
    </div>
    <div class="bodyer-layout">
      <div class="asider-layout">
        <kuroko-menu></kuroko-menu>
      </div>
      <div class="mainer-layout">
        
      </div>
    </div>
  </div>
</template>

<script>
import InsoHeader from "../components/sys/Header";
import KurokoMenu from "../components/sys/Menu";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  components: {
    InsoHeader,
    KurokoMenu
  }
};
</script>

<style lang="scss" scoped>
.container-layout {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @include flex-box($justify:flex-start);
}

.header-layout {
  width: 100%;
  height: $headerHeight;
  position: relative;
}

.bodyer-layout {
  width: 100%;
  flex-grow: 2;
  align-items: stretch;
  display: flex;

  .asider-layout {
    height: auto;
    width: 240px;
    background: rgb(84, 92, 100);
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .mainer-layout {
    flex-grow: 2;
    height: auto;
  }
}
</style>

