// 根级别 mutation

import {
  TEST_VALUE
} from './mutation-types'

const mutations = {
  [TEST_VALUE] (state, value) {
    state.value = value
  }
}

export default mutations

