// error 模块

import { SET_ERROR } from '../mutation-types';

// state
const state = {
  error: null
};

// mutations
const mutations = {
  [SET_ERROR] (state, error) {
    state.error = error;
  }
};

export default {
  state,
  mutations
}
