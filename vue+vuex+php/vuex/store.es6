import Vue from '/static/libs/vue/vue';
import Vuex from '/static/libs/vue/vuex';
import { SET_COUNTRY } from './mutation-types';

// modules
import error from 'modules/error';

Vue.use(Vuex);

const state = {
    country: null
};

const mutations = {
    [SET_COUNTRY] (state, name) {
      console.log('此处设置了条件名称' + name);
      state.country = name;
    }
};

const middkewares = {
  snapshot: true,
  onInit(state) {
    console.log("onInit");
  },
  onMutation (mutation, nextState, prevState) {
    console.log("onMutation");
  }
};

export default new Vuex.Store({
  // strict: true,  // 严格模式
  state,  // 状态
  mutations,  // 状态变更
  middlewares: [middkewares],  // 中间件
  modules: {  // 模块化store
    error
  }
});
