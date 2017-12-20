<template>
  <div class="iconBtn-content">
   <button>
     <i class="el-icon-delete"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "iconBtn",
  data() {
    return {
      msg: "demo"
    };
  }
};
</script>

<style lang="scss">
.iconBtn-content {
  button{
    border-radius:24px;
    border: none;
    outline: none; 
    padding: 8px;
  }
  button i {
    font-size: 24px;
  }
}
</style>
<style scoped>

</style>
