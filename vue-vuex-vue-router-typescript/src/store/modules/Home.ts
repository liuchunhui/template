import {
  HOME_DATA_LINE,
  HOME_REASON_PIE,
  HOME_USER_BAR,
  HOME_REAL_USER_BAR,
  HOME_DATA_LINE_LOADING,
  HOME_REASON_PIE_LOADING,
  HOME_USER_BAR_LOADING,
  HOME_REAL_USER_BAR_LOADING,
  HOME_DATA_INIT
} from '../mutation-types'

import { Commit } from 'vuex'

/** 格式 约束 */
export interface DataLine {
  xData: string[];
  yData: number[];
}
export interface ReasonPie {
  legendData: string[];
  seriesData: {value: number; name: string}[]
}
export interface UserBar {
  xData: string[];
  yData: number[];
}
export interface RealUserBar {
  xData: string[];
  yData: number[];
}
export interface State {
  dataLine: DataLine;
  // dataLine: boolean;
  reasonPie: ReasonPie;
  userBar: UserBar;
  realUserBar: RealUserBar;
  dataLineLoading: boolean;
  reasonPieLoading: boolean;
  userBarLoading: boolean;
  realUserBarLoading: boolean;
}

const state: State = {
  dataLine: { // 查杀数量折线图数据
    xData: [], // x 轴
    yData: [] // y 轴
  },
  reasonPie: { // 查杀原因饼图数据
    legendData: [],
    seriesData: []
  },
  userBar: { // 查杀用户柱形图数据
    xData: [],
    yData: []
  },
  realUserBar: { // 查杀真实用户柱形图
    xData: [],
    yData: []
  },
  dataLineLoading: false,
  reasonPieLoading: false,
  userBarLoading: false,
  realUserBarLoading: false
}

// mutations
const mutations = {
  [HOME_DATA_LINE] (state: State, value: DataLine): void {
    console.log('dddddd---', value)
    state.dataLine = value
  },
  [HOME_REASON_PIE] (state: State, value: ReasonPie): void {
    state.reasonPie = value
  },
  [HOME_USER_BAR] (state: State, value: UserBar): void {
    state.userBar = value
  },
  [HOME_REAL_USER_BAR] (state: State, value: RealUserBar): void {
    state.realUserBar = value
  },
  [HOME_DATA_LINE_LOADING] (state: State, value: boolean): void {
    console.log('nnnnnnnnn', value)
    state.dataLineLoading = value
  },
  [HOME_REASON_PIE_LOADING] (state: State, value: boolean): void {
    state.reasonPieLoading = value
  },
  [HOME_USER_BAR_LOADING] (state: State, value: boolean): void {
    state.userBarLoading = value
  },
  [HOME_REAL_USER_BAR_LOADING] (state: State, value: boolean): void {
    state.realUserBarLoading = value
  }
}

function test (num: number) {
  return num
}
// actions
const actions = {
  [HOME_DATA_LINE] (context: { commit: Commit, state: State }, value: number): void {
    // fetch('/fs/data/getFunnelByPath', {
    //   method: 'POST',
    //   body: JSON.stringify({})
    // }).then(function (response) {
    //   if (response.status >= 400) {
    //     throw new Error('Bad response from server')
    //   }
    //   return response.json()
    // }).then(function (data) {
    //   context.commit(SUMMARY_DATA_LINE, value)
    // })
    context.commit(HOME_DATA_LINE_LOADING, 'aaaaa')
    console.log('ttttttt--->', test(123))
    setTimeout(() => {
      context.commit(HOME_DATA_LINE, false)
      context.commit(HOME_DATA_LINE_LOADING, false)
    }, 1500)
  },
  [HOME_REASON_PIE] (context: { commit: Commit, state: State }, value: any): any {
    context.commit(HOME_REASON_PIE_LOADING, true)
    setTimeout(() => {
      context.commit(HOME_REASON_PIE, {
        legendData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        seriesData: [
          {value: 335, name: '直接访问'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1548, name: '搜索引擎'}
        ]
      })
      context.commit(HOME_REASON_PIE_LOADING, false)
    }, 1500)
  },
  [HOME_USER_BAR] (context: { commit: Commit, state: State }, value: any): any {
    context.commit(HOME_USER_BAR_LOADING, true)
    setTimeout(() => {
      context.commit(HOME_USER_BAR, {
        xData: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        yData: [23, 34, 14, 54, 12, 11, 34]
      })
      context.commit(HOME_USER_BAR_LOADING, false)
    }, 1500)
  },
  [HOME_REAL_USER_BAR] (context: { commit: Commit, state: State }, value: any): any {
    context.commit(HOME_REAL_USER_BAR_LOADING, true)
    setTimeout(() => {
      context.commit(HOME_REAL_USER_BAR, {
        xData: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        yData: [23, 34, 14, 54, 12, 11, 34]
      })
      context.commit(HOME_REAL_USER_BAR_LOADING, false)
    }, 1500)
  },
  [HOME_DATA_INIT] (context: { commit: Commit, state: State }): any {
    context.commit(HOME_DATA_LINE, {xData: [], yData: []})
    context.commit(HOME_REASON_PIE, {legendData: [], seriesData: []})
    context.commit(HOME_USER_BAR, {xData: [], yData: []})
    context.commit(HOME_REAL_USER_BAR, {xData: [], yData: []})
    context.commit(HOME_DATA_LINE_LOADING, false)
    context.commit(HOME_REASON_PIE_LOADING, false)
    context.commit(HOME_USER_BAR_LOADING, false)
    context.commit(HOME_REAL_USER_BAR_LOADING, false)
  }
}

// getters
const getters = {
  dataLine: (state: State) => state.dataLine,
  reasonPie: (state: State) => state.reasonPie,
  userBar: (state: State) => state.userBar,
  realUserBar: (state: State) => state.realUserBar,
  dataLineLoading: (state: State) => state.dataLineLoading,
  reasonPieLoading: (state: State) => state.reasonPieLoading,
  userBarLoading: (state: State) => state.userBarLoading,
  realUserBarLoading: (state: State) => state.realUserBarLoading
}

export default {
  state,
  getters,
  mutations,
  actions
}
