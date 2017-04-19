// 根级别的action

import {
  TEST_VALUE
} from './mutation-types'

const actions = {
  [TEST_VALUE] (context, value) {
    context.commit(TEST_VALUE, value)
  }
}

export default actions
