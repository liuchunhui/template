// 根级别的action

import {
  GLOBAL_INFO,
  GLOBAL_SUCCESS,
  GLOBAL_WARING,
  GLOBAL_ERROR,
  GLOBAL_NAV
} from './mutation-types'

const actions = {
  [GLOBAL_INFO] (context: any, value: any): any {
    context.commit(GLOBAL_INFO, value)
  },
  [GLOBAL_SUCCESS] (context: any, value: any): any {
    context.commit(GLOBAL_SUCCESS, value)
  },
  [GLOBAL_WARING] (context: any, value: any): any {
    context.commit(GLOBAL_WARING, value)
  },
  [GLOBAL_ERROR] (context: any, value: any): any {
    context.commit(GLOBAL_ERROR, value)
  },
  [GLOBAL_NAV] (context: any, value: any): any {
    context.commit(GLOBAL_NAV, value)
  }
}

export default actions
