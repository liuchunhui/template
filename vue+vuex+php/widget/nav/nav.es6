import Vue from "/static/libs/vue/vue.js";
import VueRouter from "/static/libs/vue/vue-router";

// 定义组件
import RealMonitor from "/widget/real_monitor/real_monitor";
import SDefineForm from "/widget/sdefine_form/sdefine_form";

Vue.use(VueRouter);

// 路由器根组件
var Nav = Vue.extend({});

Nav = {
  id: '#nav',
  data: function () {
    return {
      isReal: true,  // 实时监控页
      isDefine: false  // 自定义指标页
    }
  },
  methods: {
    change_page: function (type) {

      this.isReal = false;
      this.isDefine = false;
      type == 'real' ? this.isReal = true : this.isDefine = true;

    }
  }
};

// 创建一个路由器实例
var router = new VueRouter();

// 定义路由规则
router.map({
  '/real_monitor': {
    component: RealMonitor
  },
  '/sdefine_form': {
    component: SDefineForm
  }
});

router.start(Nav, '#nav');


