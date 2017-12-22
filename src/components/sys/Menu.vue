<template>
  <div class="kuroko-menu-box">
   <ul>
     <li class="kuroko-menu-item">
       <div>
         <span class="menu-icon"><i class="mdi mdi-home"></i></span>
         <span>标题1</span>
         <span class="menu-arrow"><i class="mdi mdi-chevron-down"></i></span>
       </div>
     </li>
     <li class="kuroko-menu-item">
       <div>标题2</div>
     </li>
     <li class="kuroko-menu-item">
       <div>标题3</div>
     </li>
     <li class="kuroko-menu-item">
       <div>标题4</div>
     </li>
     <li>
       <div>标题5</div>
       <ul>
         <li class="kuroko-menu-item"><div>标题5.1</div></li>
         <li class="kuroko-menu-item"><div>标题5.2</div></li>
       </ul>
     </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      msg: "demo"
    };
  }
};
</script>

<style lang="scss">
.kuroko-menu-box {
  display: inline-block;
  background: wheat;
  ul {
    list-style: none;
    padding: 0px;
    color: #fff;
    li {
      background: gray;
      padding: 0px;
      & > div {
        padding: 8px 20px;
        font-size: 14px;
        cursor: default;
      }
    }
  }
}
.kuroko-menu-item {
  &:hover {
    background: rgb(97, 97, 97);
  }
}
</style>
<style scoped>

</style>
