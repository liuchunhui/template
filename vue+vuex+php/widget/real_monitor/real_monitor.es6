import store from "/vuex/store";
import { getCountry } from "../../vuex/getters";
import { getError } from "/vuex/modules/error-getters";

import city from "tmpl/city_condition";
import activity from  "tmpl/activity_condition";

let template = __inline('real_monitor.tpl');

export default {
  template,
  data() {
    return {}
  },
  components: {
    city,
    activity
  },
  store,
  vuex: {
    getters: {
      getCountry: getCountry,
      getError: getError
    }
  }
}


