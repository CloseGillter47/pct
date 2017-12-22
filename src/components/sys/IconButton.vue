<template>
  <div class="iconBtn-content">
   <button>
     <i :class="icon"></i>
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
  },
  props: {
    icon: {
      default: "el-icon-goods"
    }
  }
};
</script>

<style lang="scss">
.iconBtn-content {
  margin: 4px;
  button {
    color: #fff;
    border-radius: 24px;
    border: none;
    outline: none;
    padding: 8px;
    background: transparent;
    &:hover {
      background: rgba($color: #000000, $alpha: 0.1);
    }
    transition: background 0.8s ease-in-out;
  }
  button i {
    font-size: 24px;
    line-height: 24px;
  }
}
</style>
<style scoped>

</style>
