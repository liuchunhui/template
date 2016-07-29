<div id="nav" class="nav-xs nav-sm nav-lg nav-page">
  <div class="title-page">顶部导航</div>
  <p>
    <!-- 使用指令 v-link 进行导航。 -->
    <a v-link="{ path: '/real_monitor' }" v-bind:class="{'selected': isReal}" @click="change_page('real')">实时监控</a>
    <a v-link="{ path: '/sdefine_form' }" v-bind:class="{'selected': isDefine}" @click="change_page('define')">自定义指标</a>
  </p>
  <!-- 路由外链 -->
  <router-view></router-view>
</div>
{%script%}
require('./nav.es6')
{%/script%}
