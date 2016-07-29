import { setCountry } from '/vuex/actions';

let template = __inline("./activity_condition.tpl");

export default {
  template,
  data() {
    return {
      name: '活动监控',
      message: 'test'
    }
  },
  methods: {

  },
  computed: {
    thisMessage: {
      get () {
        console.log("获取data");
        console.log(this.message);
        return this.message;
      },
      set (val) {
        console.log('设置data');
        console.log(val);
        this.message = val;
      }
    }
  },
  vuex: {
    actions : {
      setCountry: setCountry
    }
  }
};
