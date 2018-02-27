import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/dist/logger'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import Home from './modules/Home'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // 严格模式，开发环境下开启，发布环境下关闭
  state, // 状态
  mutations, // 状态变更
  actions,
  getters,
  modules: {
    Home
  }
  // plugins: [createLogger()] // 日志插件用于调试，开发环境下开启，发布环境下关闭
})

// if (module.hot) { // 在开发过程中，actions 和 mutations 成为可热重载模块
//   module.hot.accept([
//     // './mutations.ts',
//     // './modules/Summary.ts'
//     './getters',
//     './actions',
//     './mutations'
//   ], () => {
//     // const newMutations = require('./mutations.ts').default
//     // const newSummary = require('./modules/Summary.ts').default
//     store.hotUpdate({
//       // mutations: newMutations,
//       // modules: {
//       //   summary: newSummary
//       // }
//       getters: require('./getters'),
//       actions: require('./actions'),
//       mutations: require('./mutations')
//     })
//   })
// }

export default store
