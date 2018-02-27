<template>
  <div class="hive-kill">
    测试路由一
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {}
  }
})
</script>
<style scoped lang="less">
  .hive-kill {
    position: relative;
    .hive-kill-sider {
      position: absolute;
      width: 150px;
    }
    .layout {
      margin-left: 149px;
      padding-left: 20px;
      border-left: solid 1px #dddee1;
      .layout-breadcrumb {
        margin: 24px 0;
      }
    }
  }
</style>
