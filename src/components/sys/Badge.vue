<template>
  <div class="badge-box">
    <slot></slot>
    <div class="badge-content">
      <div class="_badge ali-top ali-right" v-if="mode==='number'">{{count}}</div>
      <div class="_badge ali-top ali-right is-text no-p" v-if="mode==='text'"><span>{{text}}</span></div>
      <div class="_badge ali-top ali-right no-text" v-if="mode==='mini'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "badge",
  data() {
    return {
      msg: "demo"
    };
  },
  props: {
    mode: {
      default: "text"
    },
    count: {
      default: 1
    },
    text:{
      default:"新"
    }
  }
};
</script>

<style lang="scss">
.badge-box {
  position: relative;
}
.badge-content {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
._badge {
  color: #fff;
  background: #f56c6c;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  position: absolute;
}
._badge.no-text {
  width: 12px;
  min-width: 12px;
  height: 12px;
  min-height: 12px;
  border-radius: 6px;
  background: #f56c6c;
  position: absolute;
}
._badge.ali-right {
  right: 0;
}
._badge.ali-top {
  top: 0;
}
._badge.ali-bottom {
  bottom: 0px;
}
._badge.ali-left {
  left: 0;
}
._badge.no-text.ali-right {
  right: 6px;
}
._badge.no-text.ali-top {
  top: 6px;
}
._badge.no-text.ali-bottom {
  bottom: 6px;
}
._badge.no-text.ali-left {
  left: 6px;
}
._badge.is-text.no-p {
  font-size: 10px;
  padding:1px;
}
._badge.is-text.p4 {
  padding-left:4px;
  padding-right:4px;
}
._badge.is-text span {
  display: inline-block;
  font-size: 12px;
}
</style>
<style scoped>

</style>
