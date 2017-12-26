<template>
  <div class="kuroko-menu-box">
   <ul>
     <li class="kuroko-menu-item">
       <div>
         <span class="menu-icon"><i class="mdi mdi-home"></i></span>
         <span class="menu-title">主页</span>
         <span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
       </div>
     </li>
     <li class="kuroko-menu-item-group">
       <div>
         <span class="item-group-name">娱乐项目</span>
       </div>
     </li>
     <li class="kuroko-menu-item">
       <div>
         <span class="menu-icon"><i class="mdi mdi-music-note"></i></span>
         <span class="menu-title">音乐</span>
         <span class="menu-arrow"><i class="mdi mdi-chevron-down"></i></span>
       </div>
     </li>
     <li class="kuroko-menu-item">
       <div>
         <span class="menu-icon"><i class="mdi mdi-nintendo-switch"></i></span>
         <span class="menu-title">游戏</span>
         <span class="menu-arrow"><i class="mdi mdi-chevron-down"></i></span>
       </div>
     </li>
     <li class="kuroko-menu-item">
       <div>
         <span class="menu-icon"><i class="mdi mdi-television-classic"></i></span>
         <span class="menu-title">影视</span>
         <span class="menu-arrow"><i class="mdi mdi-chevron-down"></i></span>
       </div>
     </li>
     <li class="kuroko-menu-item">
       <div>
         <span class="menu-icon"><i class="mdi mdi-account-multiple"></i></span>
         <span class="menu-title">社交</span>
         <span class="menu-arrow"><i class="mdi mdi-chevron-up"></i></span>
       </div>
       <ul>
          <li class="kuroko-menu-item-group">
            <div>
              <span class="item-group-name">天朝</span>
            </div>
         </li>
         <li class="kuroko-menu-item">
            <div>
              <span class="menu-icon"><i class="mdi mdi-qqchat"></i></span>
              <span class="menu-title">企鹅</span>
              <span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
            </div>
         </li>
         <li class="kuroko-menu-item">
            <div>
              <span class="menu-icon"><i class="mdi mdi-wechat"></i></span>
              <span class="menu-title">微信</span>
              <span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
            </div>
         </li>
         <li class="kuroko-menu-item-group">
            <div>
              <span class="item-group-name">其他</span>
            </div>
         </li>
         <li class="kuroko-menu-item">
            <div>
              <span class="menu-icon"><i class="mdi mdi-whatsapp"></i></span>
              <span class="menu-title">我聊</span>
              <span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span>
            </div>
         </li>
       </ul>
     </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: "kuroko-menu",
  data() {
    return {
      msg: "demo"
    };
  }
};
</script>

<style lang="scss">
.kuroko-menu-box {
  width: 100%;
  max-width: 240px;
  display: inline-block;
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    color: #fff;
    li {
      background: rgb(84, 92, 100);
      padding: 0px;
      & > div {
        padding: 0px 20px;
        font-size: 14px;
        cursor: default;
      }
    }
  }
}
.kuroko-menu-item {
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    .menu-icon,
    .menu-title,
    .menu-arrow {
      display: inline-block;
    }
    .menu-icon,
    .menu-arrow {
      font-size: 18px;
      line-height: 18px;
      padding: 0px 4px;
      color: #909399;
    }
    .menu-title {
      flex-grow: 2;
      padding: 0px 4px;
      line-height: 50px;
    }

    &:hover {
      background: rgb(67, 74, 80);
    }
  }
}
.kuroko-menu-item-group {
  color: #909399;
  .item-group-name {
    padding: 0 4px;
    line-height: 32px;
    font-size: 12px;
  }
}
</style>
<style scoped>

</style>
