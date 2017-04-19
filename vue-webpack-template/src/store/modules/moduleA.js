import { MODULEA_VALUE } from '../mutation-types'

const moduleA = {
  state: {
    value: 'modulea'
  },
  mutations: {
    [MODULEA_VALUE] (state, value) {
      state.value = value
    }
  },
  actions: {
    [MODULEA_VALUE] (context, value) {
      context.commit(MODULEA_VALUE, value)
    }
  },
  getters: {
    addVaule: state => {
      return state.value + state.value
    }
  }
}

export default moduleA
