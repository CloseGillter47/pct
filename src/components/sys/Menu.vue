<template>
  <div class="kuroko-menu-box">
   <ul>
     <li><div>标题1</div></li>
     <li><div>标题2</div></li>
     <li><div>标题3</div></li>
     <li><div>标题4</div></li>
     <li>
       <div>标题5</div>
       <ul>
         <li><div>标题5.1</div></li>
         <li><div>标题5.2</div></li>
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
    padding-left:20px;
  }
}
</style>
<style scoped>

</style>
