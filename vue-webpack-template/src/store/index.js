import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

console.log(moduleA)

Vue.use(Vuex)

const state = {
  value: 'test value'
}

const getters = {
  upperCase: state => {
    return state.value.toUpperCase()
  }
}

const store = new Vuex.Store({
  strict: true,  // 严格模式，开发环境下开启，发布环境下关闭
  state,  // 状态
  mutations,  // 状态变更
  actions,
  getters,
  modules: {
    moduleA
  },
  plugins: [createLogger()]  // 日志插件用于调试，开发环境下开启，发布环境下关闭
})

if (module.hot) {  // 在开发过程中，actions 和 mutations 成为可热重载模块
  module.hot.accept(['./mutations', './modules/moduleA'], () => {
    const newMutations = require('./mutations').default
    const newModuleA = require('./modules/moduleA').default
    store.hotUpdate({
      mutations: newMutations,
      modules: {
        moduleA: newModuleA
      }
    })
  })
}

export default store
