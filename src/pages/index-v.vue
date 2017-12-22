<template>
  <div class="container-layout">
    <div class="header-layout">
      <inso-header></inso-header>
    </div>
    <div class="bodyer-layout">
      <div class="asider-layout">

      </div>
      <div class="mainer-layout">
        <kuroko-menu></kuroko-menu>
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
}
</style>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
