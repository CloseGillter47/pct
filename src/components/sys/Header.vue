<template>
  <div class="header-box">
    
  </div>
</template>

<script>
export default {
  name: "InsoHeader",
  data() {
    return {};
  },

  components: {}
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
