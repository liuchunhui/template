<template>
  <div class="summary-layout">
    <div class="kill-sum">
      <div class="line-chart-layout">
        <div id="line-chart" class="line">折线图</div>
        <Spin size="large" fix v-if="dataLineLoading">
          <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
          <div>数据加载中...</div>
        </Spin>
      </div>
      <div class="pie-chart-layout">
        <div id="pie-chart" class="pie">饼形图</div>
        <Spin size="large" fix v-if="reasonPieLoading">
          <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
          <div>数据加载中...</div>
        </Spin>
      </div>
    </div>
    <div class="kill-type">
      <div class="user-chart-layout">
        <div id="user-bar" class="user">柱形图</div>
        <Spin size="large" fix v-if="userBarLoading">
          <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
          <div>数据加载中...</div>
        </Spin>
      </div>
      <div class="real-user-chart-layout">
        <div id="real-user-bar" class="real-user">柱形图</div>
        <Spin size="large" fix v-if="realUserBarLoading">
          <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
          <div>数据加载中...</div>
        </Spin>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import echarts from 'echarts'
import echartsShine from '../libs/echarts-shine'
import {
  HOME_DATA_LINE,
  HOME_REASON_PIE,
  HOME_USER_BAR,
  HOME_REAL_USER_BAR,
  HOME_DATA_INIT
} from '../store/mutation-types'
import {
  DataLine,
  ReasonPie,
  UserBar,
  RealUserBar
} from '../store/modules/Home'

echartsShine(echarts)

const commonConfig = (titleName: string) => { // echart公共配置
  return {
    title: {
      text: titleName,
      textStyle: {
        color: '#333',
        fontSize: 14,
        fontWeight: 'normal'
      }
    },
    grid: {
      top: 105,
      left: 50,
      right: 50,
      bottom: 40
    },
    tooltip: { // 提示框
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    yAxis: [{
      type: 'value',
      name: '数量'
    }],
    dataZoom: {
      show: true
    }
  }
}

export default Vue.extend({
  name: 'Summary',
  data (): any {
    return {}
  },
  computed: {
    dataLine (): DataLine {
      return this.$store.getters.dataLine
    },
    reasonPie (): ReasonPie {
      return this.$store.getters.reasonPie
    },
    userBar (): UserBar {
      return this.$store.getters.userBar
    },
    realUserBar (): RealUserBar {
      return this.$store.getters.realUserBar
    },
    dataLineLoading (): boolean {
      return this.$store.getters.dataLineLoading
    },
    reasonPieLoading (): boolean {
      return this.$store.getters.reasonPieLoading
    },
    userBarLoading (): boolean {
      return this.$store.getters.userBarLoading
    },
    realUserBarLoading (): boolean {
      return this.$store.getters.realUserBarLoading
    }
  },
  watch: {
    dataLine (data: DataLine): void {
      this.dataLineChart(data)
    },
    reasonPie (data: ReasonPie): void {
      this.dataPieChart(data)
    },
    userBar (data: UserBar): void {
      this.dataUserBarChart(data)
    },
    realUserBar (data: RealUserBar): void {
      this.dataRealUserChart(data)
    }
  },
  methods: {
    ...mapActions({
      dataLineGet: HOME_DATA_LINE, // 查杀数量折线图数据
      reasonPieGet: HOME_REASON_PIE, // 查杀原因饼图数据
      userBarGet: HOME_USER_BAR, // 查杀用户柱形图数据
      realUserBarGet: HOME_REAL_USER_BAR, // 查杀真实用户柱形图
      summaryDataInit: HOME_DATA_INIT
    }),
    dataLineChart (data: DataLine): void { // 一周查杀数量折线图
      let option = {
        ...commonConfig('折线图'),
        legend: {
          show: true,
          top: 30,
          height: 100,
          data: ['数量']
        },
        xAxis: {
          show: true,
          axisTick: {
            alignWithLabel: true
          },
          data: data.xData
        },
        series: [{
          name: '数量',
          type: 'line',
          data: data.yData
        }]
      }

      let chart = echarts.init(document.getElementById('line-chart'), 'shine')
      chart.setOption(option)
    },
    dataPieChart (data: ReasonPie): void { // 某站点用户访问来源
      let option = {
        title: {
          text: '某站点用户访问来源',
          textStyle: {
            color: '#333',
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          data: data.legendData
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['40%', '60%'],
            data: data.seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      let chart = echarts.init(document.getElementById('pie-chart'), 'shine')
      chart.setOption(option)
    },
    dataUserBarChart (data: UserBar): void { // 查杀用户柱形图
      let option = {
        ...commonConfig('柱形图'),
        legend: {
          show: true,
          top: 30,
          height: 100,
          data: ['柱状图']
        },
        xAxis: {
          show: true,
          axisTick: {
            alignWithLabel: true
          },
          data: data.xData
        },
        series: [{
          name: '柱状图',
          type: 'bar',
          barMaxWidth: 20,
          data: data.yData
        }]
      }

      let chart = echarts.init(document.getElementById('user-bar'), 'shine')
      chart.setOption(option)
    },
    dataRealUserChart (data: RealUserBar): void { // 查杀真实用户柱形图
      let option = {
        ...commonConfig('柱形图'),
        legend: {
          show: true,
          top: 30,
          height: 100,
          data: ['柱状图']
        },
        xAxis: {
          show: true,
          axisTick: {
            alignWithLabel: true
          },
          data: data.xData
        },
        series: [{
          name: '柱状图',
          type: 'bar',
          barMaxWidth: 20,
          data: data.yData
        }]
      }
      let chart = echarts.init(document.getElementById('real-user-bar'), 'shine')
      chart.setOption(option)
    }
  },
  mounted (): void {
    // this.dataLineGet({
    //   xData: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    //   yData: [23, 14, 34, 25, 14, 16, 26]
    // })
    this.dataLineGet(false)
    this.reasonPieGet()
    this.userBarGet()
    this.realUserBarGet()
    let num: string = 'aaa'
    console.log(num)
  },
  destroyed (): void {}
})
</script>
<style scoped lang="less">
  .summary-layout {
    padding: 60px 40px;
    .kill-sum {
      height: 300px;
      border-bottom: solid 1px #ddd;
      position: relative;
      .line-chart-layout {
        width: 60%;
        height: 270px;
        border-right: solid 1px #ddd;
        position: absolute;
        .line {
          width: 100%;
          height: 100%;
          font-size: 14px;
        }
      }
      .pie-chart-layout {
        width: 40%;
        min-width: 370px;
        height: 270px;
        padding-left: 20px;
        position: absolute;
        left: 60%;
        .pie {
          width: 100%;
          height: 100%;
          font-size: 14px;
        }
      }
    }
    .kill-type {
      height: 250px;
      margin-top: 30px;
      position: relative;
      .user-chart-layout {
        width: 50%;
        height: 100%;
        border-right: solid 1px #ddd;
        position: absolute;
        .user {
          width: 100%;
          height: 100%;
          font-size: 14px;
        }
      }
      .real-user-chart-layout {
        width: 50%;
        height: 100%;
        padding-left: 20px;
        position: absolute;
        left: 50%;
        .real-user {
          width: 100%;
          height: 100%;
          font-size: 14px;
        }
      }
    }
  }
</style>
