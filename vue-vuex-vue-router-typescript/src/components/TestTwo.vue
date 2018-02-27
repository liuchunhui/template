<template>
  <div class="impala-kill">
    测试路由二
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
  .impala-kill {
    position: relative;
    .impala-kill-sider {
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
