import { setError } from '/vuex/modules/error-actions';

var COUNT = 0;

export const setCountry = function({dispatch}, name){
  dispatch('SET_COUNTRY', name);
  setError({dispatch}, '错误信息提示' + COUNT++);
};
