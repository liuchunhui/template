import { setCountry } from '/vuex/actions';

let template = __inline("./city_condition.tpl");

export default {
  template,
  data() {
    return {
      name: '城市监控测试名称长度'
    }
  },
  vuex: {
    actions: {
      setCountry: setCountry
    }
  }
};
