<template>
  <div class="header-layout">
    <inso-header></inso-header>
  </div>
</template>

<script>
import InsoHeader from "../components/sys/Header";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  components: {
    InsoHeader
  }
};
</script>

<style lang="scss" scoped>
.header-layout {
  width: 100%;
  height: 96px;
  position: relative;
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
