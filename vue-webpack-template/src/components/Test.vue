<template>
  <div class="test">
    test
    <el-select v-model="selected" placeholder="请选择">
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value"
        track-by="$index"
        :key="item.value"
      >
      </el-option>
    </el-select>
    <br />
    <div>测试store获取value值--> {{value}}</div>
    <div>测试getter获取value值--> {{upperCase}}</div>
    <div>测试mutations修改value值--><el-button @click="changeValue('hahahahah')">test</el-button></div>
    <div>测试action修改value值--><el-button @click="actionChangeValue('action test test')">test</el-button></div>
    <br />
    <div>测试moduleA的state获取value值-->{{moduleA.value}}</div>
    <div>测试moduleA的getter获取value值--> {{addVaule}}</div>
    <div>测试moduleA的mutations修改value值--><el-button @click="changeModuleValue('module mutation setter')">test</el-button></div>
    <div>测试moduleA的action修改value值--><el-button @click="actionModuleChangeValue('module test test')">test</el-button></div>
  </div>
</template>

<script>
  import { Button, Select, Option } from 'element-ui'
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  import {
    TEST_VALUE,
    MODULEA_VALUE
  } from '../store/mutation-types'

  export default {
    name: 'test',
    components: {
      [Button.name]: Button,
      [Select.name]: Select,
      [Option.name]: Option
    },
    computed: {
      ...mapState(['value', 'moduleA']),
      ...mapGetters(['upperCase', 'addVaule'])
    },
    data () {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        selected: ''
      }
    },
    methods: {
      ...mapMutations({
        'changeValue': TEST_VALUE,
        'changeModuleValue': MODULEA_VALUE
      }),
      ...mapActions({
        'actionChangeValue': TEST_VALUE,
        'actionModuleChangeValue': MODULEA_VALUE
      })
    }
  }
</script>

<style scoped>

</style>
