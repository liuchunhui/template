<template>
  <div class="layout">
    <div>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="hive-kill">
          <router-link to="/home">
            <div class="layout-logo">Vue Typescript</div>
          </router-link>
          <div class="layout-nav">
            <router-link to="/test-one">
              <menu-item name="test-one">
                <Icon type="ios-navigate"></Icon>
                路由测试一
              </menu-item>
            </router-link>
            <router-link to="/test-two">
              <menu-item name="test-two">
                <Icon type="ios-keypad"></Icon>
                路由测试二
              </menu-item>
            </router-link>
          </div>
        </Menu>
      </Header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  data (): any {
    return {}
  },
  methods: {
    show (): void {
      console.log('hahahhahaha')
    }
  },
  mounted () {
    // this.show()
  }
})
</script>

<style scoped lang="less">
  .layout{
    .layout-logo{
      width: 200px;
      height: 30px;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      text-align: center;
      color: #ffffff;
      line-height: 30px;
      font-size: 22px;
    }
    .layout-nav{
      float: right;
      margin-right: 20px;
    }
  }
</style>
