// 根级别 mutation

import {
  GLOBAL_INFO,
  GLOBAL_SUCCESS,
  GLOBAL_WARING,
  GLOBAL_ERROR,
  GLOBAL_NAV
} from './mutation-types'

const mutations = {
  [GLOBAL_INFO] (state: any, value: any): any {
    state.info = value
  },
  [GLOBAL_SUCCESS] (state: any, value: any): any {
    state.success = value
  },
  [GLOBAL_WARING] (state: any, value: any): any {
    state.waring = value
  },
  [GLOBAL_ERROR] (state: any, value: any): any {
    state.error = value
  },
  [GLOBAL_NAV] (state: any, value: any): any {
    state.nav = value
  }
}

export default mutations
