<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br />
    <router-link to="/">主页</router-link>
    <router-link to="/test">test</router-link>
    <br />
    <br />
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
