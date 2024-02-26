import * as actions from "./actions"
import { appType } from "./types"

type constructType = {
  namespaced: boolean,
  state: appType,
  actions: any,
  getters: any,
  mutations: any
}

export default <constructType>{
  namespaced: true,
  state: {
    localDBFirst: true,
    is: {
      dev: false,
      loading: false,
      error: false,
      maintenance: false,
    },
    companyInfo: {},
    socialMedia: {}
  },
  actions,
  getters: {},
  mutations: {},
}